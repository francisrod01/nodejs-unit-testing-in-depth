const chai = require('chai');

let user = require('./user');

const expect = chai.expect;


describe('user', () => {
  context('getFullAddress', () => {
    it('it should return the full address', () => {
      let result = user.getFullAddress({
        street: '100 king',
        city: 'London',
        province: 'ON',
        postal: '1111'
      });

      expect(result).to.equal('100 king, London, ON, 1111');
    });

    it('it should return the full address', () => {
      let result = user.getFullAddress({
        street: '200 king',
        city: 'London',
        province: 'ON',
        postal: '1111'
      });

      expect(result).to.equal('200 king, London, ON, 1111');
    });

    it('should return an error', () => {
      let result = user.getFullAddress({
        street: null,
        city: 'London',
        province: 'ON',
        postal: '1111'
      });

      expect(result).to.equal('Invalid user');
    })
  });
});
