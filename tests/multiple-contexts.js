const assert = require('assert');

describe('This file will be tested', () => {
  context('function to be tested', () => {
    it('should do something', () => {
      assert.equal(1, 1);
    });
  });

  context('another context', () => {
    it('pending test');
  })
});
