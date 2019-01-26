const assert = require('assert');

describe('This file will be tested', () => {
  context('function to be tested', () => {

    before(() => {
      console.log('===== show content [before]');
    });

    after(() => {
      console.log('===== Show content [after]');
    });

    beforeEach(() => {
      console.log('===== show [beforeEach] content');
    });

    afterEach(() => {
      console.log('===== show [afterEach] content');
    });

    it('should do something', () => {
      assert.equal(1, 1);
    });
  });
});
