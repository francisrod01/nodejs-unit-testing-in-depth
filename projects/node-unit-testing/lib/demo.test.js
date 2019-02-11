const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const rewire = require('rewire');
const expect = chai.expect;

chai.use(chaiAsPromised);
chai.use(sinonChai);

const demo = rewire('./demo');

describe('demo test', () => {
  context('add', () => {
    it('should add two numbers', () => {
      expect(demo.add(1, 2)).to.equal(3);
    });
  });

  context('callback add', () => {
    it('should test the callback', () => {
      demo.addCallback(1, 2, (err, result) => {
        expect(err).to.not.exist;
        expect(result).to.equal(3);
        done();
      });
    });
  });

  context('test promise', () => {
    it('should add with a promise cb', (done) => {
      demo.addPromise(1, 2).then(result => {
        expect(result).to.equal(3);
        done();
      }).catch(ex => {
        done(ex);
      });
    });

    it('should test a promise with return', () => {
      return demo.addPromise(1, 2).then(result => {
        expect(result).to.equal(3);
      });
    });

    it('should test promise with async / await', async () => {
      let result = await demo.addPromise(1, 2);

      expect(result).to.equal(3);
    });

    it('should test promise with chai as promised', async () => {
      await expect(demo.addPromise(1, 2)).to.eventually.equal(3);
    });
  });

  context('test doubles', () => {
    it('should spy on log', () => {
      let spy = sinon.spy(console, 'log');
      demo.foo();

      expect(spy.calledOnce).to.be.true;
      expect(spy).to.have.been.calledOnce;
      spy.restore();
    });

    it('should stub console.warn', () => {
      let stub = sinon.stub(console, 'warn')
        .callsFake(() => { console.log('message from stub') });

      demo.foo();
      expect(stub).to.have.been.calledOnce;
      stub.restore();
    });
  });

  context('stub private functions', () => {
    it('should stub createFile', async () => {
      let createStub = sinon.stub(demo, 'createFile').resolves('create_stub');
      let callStub = sinon.stub().resolves('calldb_stub');

      demo.__set__('callDB', callStub);

      let result = await demo.bar('test.txt');

      expect(result).to.equal('calldb_stub');
      expect(createStub).to.have.been.calledOnce;
      expect(createStub).to.have.been.calledWith('test.txt');
      expect(callStub).to.have.been.calledOnce;
    })
  })
});
