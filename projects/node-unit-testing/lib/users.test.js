const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mongoose = require('mongoose');

const expect = chai.expect;

chai.use(chaiAsPromised);
chai.use(sinonChai);

const users = require('./users');

const sandbox = sinon.createSandbox();

describe('users', () => {
  let sampleUser;

  beforeEach(() => {
    sampleUser = {
      id: 123,
      name: 'foo',
      email: 'foo@bar.com'
    };

    findStub =
      sandbox
        .stub(mongoose.Model, 'findById')
        .resolves(sampleUser);
  });

  afterEach(() => {
    sandbox.restore();
  });

  context('get', () => {
    it('should check for an id', (done) => {
      users.get(null, (err, result) => {
        expect(err).to.exist;
        expect(err.message).to.equal('Invalid user id');
        done();
      });
    });
  });
});