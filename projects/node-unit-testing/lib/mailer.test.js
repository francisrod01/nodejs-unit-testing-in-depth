const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const rewire = require('rewire');

const expect = chai.expect;

let sandbox = sinon.createSandbox();
let mailer = rewire('./mailer');

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('mailer', () => {
  let emailStub;

  beforeEach(() => {
    emailStub = sandbox.stub().resolves('done');
    mailer.__set__('sendEmail', emailStub);
  });

  afterEach(() => {
    sandbox.restore();
    mailer = rewire('./mailer');
  });

  context('sendWelcomeEmail', () => {
    it('should check for email and name', async () => {
      await expect(mailer.sendWelcomeEmail()).to.eventually.be.rejectedWith('Invalid input');
      await expect(mailer.sendWelcomeEmail('foo@bar.com')).to.eventually.be.rejectedWith('Invalid input');
    });

    it('should call sendEmail with email and message', async () => {
      await mailer.sendWelcomeEmail('foo@bar.com', 'FOO_MESSAGE');

      const message = 'Dear FOO_MESSAGE, welcome to our family!';

      expect(emailStub).to.have.been.calledWith('foo@bar.com', message);
    });
  });

  context('sendPasswordResetEmail', () => {
    it('should check for email', async () => {
      await expect(mailer.sendPasswordResetEmail()).to.eventually.be.rejectedWith('Invalid input');
    });

    it('should call sendEmail with email', async () => {
      await mailer.sendPasswordResetEmail('foo@bar.com');

      const message = 'Please click http://some_link to reset your password.';

      expect(emailStub).to.have.been.calledWith('foo@bar.com', message);
    });
  });

  context('sendEmail', () => {
    let sendEmail;

    beforeEach(() => {
      mailer = rewire('./mailer');

      sendEmail = mailer.__get__('sendEmail');
    });

    it('should check for email and body', async () => {
      await expect(sendEmail()).to.eventually.be.rejectedWith('Invalid input');
      await expect(sendEmail('foo@bar.com')).to.eventually.be.rejectedWith('Invalid input');
    });

    it('should call sendEmail with email and message', async () => {
      // stub actual mailer
      let result = await(sendEmail('foo@bar.com', 'welome'));

      expect(result).to.equal('Email sent');
    });
  });
});
