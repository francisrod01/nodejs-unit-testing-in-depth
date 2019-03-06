const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const rewire = require('rewire');
const request = require('supertest');

const expect = chai.expect;

chai.use(chaiAsPromised);
chai.use(sinonChai);


var app = rewire('./app');
var users = require('./users');
var sandbox = sinon.createSandbox();


describe('app', () => {
  afterEach(() => {
    app = rewire('./app');
    sandbox.restore();
  });

  context('GET /', () => {
    it('should get /', (done) => {
      request(app).get('/')
        .expect(200)
        .end((err, response) => {
          expect(response.body).to.have.property('name').to.equal('Foo Fooing Bar');
          done(err);
        });
    });
  });

  context('POST /user', () => {
    let createstub, errorStub;

    it('should call user.create', (done) => {
      createstub = sandbox.stub(users, 'create').resolves(({ name: 'foo' }));

      request(app).post('/user')
        .send({ name: 'fake' })
        .expect(200)
        .end((err, response) => {
          expect(createstub).to.have.been.calledOnce;
          expect(response.body).to.have.property('name').to.equal('foo');
          done(err);
        });
    });

    it('should call handleError on error', (done) => {
      createstub = sandbox.stub(users, 'create').rejects(new Error('fake_error'));

      errorStub = sandbox.stub().callsFake((res, error) => {
        return res.status(400).json({ error: 'fake' });
      });

      app.__set__('handleError', errorStub);

      request(app).post('/user')
        .send({ name: 'fake' })
        .expect(400)
        .end((err, response) => {
          expect(createstub).to.have.been.calledOnce;
          expect(errorStub).to.have.been.calledOnce;
          expect(response.body).to.have.property('error').to.equal('fake');
          done(err);
        });
    });
  });
});
