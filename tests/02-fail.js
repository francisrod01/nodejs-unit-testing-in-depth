const assert = require('assert');

describe('Fail file will be tested', () => {
  context('function to be tested', () => {
    it('should do something', () => {
      assert.deepEqual({ name: 'joe' }, { name: 'steve' });
    });
  });
});
