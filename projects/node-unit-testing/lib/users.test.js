const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mongoose = require('mongoose');

chai.use(chaiAsPromised);
chai.use(sinonChai);

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
});