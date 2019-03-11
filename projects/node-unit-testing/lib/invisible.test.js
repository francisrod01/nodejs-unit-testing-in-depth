const chai = require('chai');

const invisible = require('./invisible');

const expect = chai.expect;


describe('invisible', () => {
  context('test', () => {
    it('should do nothing', () => {
      invisible.test();

      expect('this is a useless test').to.be.a('string');
    });
  });
});
