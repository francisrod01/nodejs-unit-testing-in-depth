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
var sandbox = sinon.createSandbox();


describe('app', () => {
  afterEach(() => {
    app = rewire('./app');
    sandbox.restore();
  });

  //
});
