const chai = require('chai');
const expect = chai.expect;

const demo = require('./demo');

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
  })
});
