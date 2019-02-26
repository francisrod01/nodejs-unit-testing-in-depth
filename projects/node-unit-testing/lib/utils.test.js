const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
let crypto = require('crypto');

const expect = chai.expect;

chai.use(sinonChai);
chai.use(chaiAsPromised);

let config = require('./config');
let utils = require('./utils');

let sandbox = sinon.createSandbox();


describe('utils', () => {
  let secretStub, digestStub, updatestub, createHashStub, hash;

  beforeEach(() => {
    secretStub = sandbox.stub(config, 'secret').returns('fake_secret');
    digestStub = sandbox.stub().returns('ABC123');
    updatestub = sandbox.stub().returns({
      digest: digestStub
    });
    createHashStub = sandbox.stub(crypto, 'createHash').returns({
      update: updatestub
    });

    hash = utils.getHash('foo');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return null if invalid string is passed', () => {
    sandbox.reset();

    let hash2 = utils.getHash(null);
    let hash3 = utils.getHash(123);
    let hash4 = utils.getHash({ name: 'bar' });

    expect(hash2).to.be.null;
    expect(hash3).to.be.null;
    expect(hash4).to.be.null;

    expect(createHashStub).to.not.have.been.called;
  });

  it('should get secret from config', () => {
    expect(secretStub).to.have.been.called;
  });

  it('should call crypto with correct settings and return hash', () => {
    expect(createHashStub).to.have.been.calledWith('md5');
    expect(updatestub).to.have.been.calledWith('foo_fake_secret');
    expect(digestStub).to.have.been.calledWith('hex');
    expect(hash).to.equal('ABC123');
  });
});
