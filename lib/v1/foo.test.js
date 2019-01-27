const chai = require('chai');
const expect = chai.expect;

describe('foo test', () => {
  it('should compare some values', () => {
    expect(1).to.equal(1);
    console.log('ENV: ', process.env.NODE_ENV);

    if (process.env.NODE_ENV === 'development') {
      console.log('DEVELOPMENT MODE');
    }
  });

  it('should test some other stuff', () => {
    expect({ name: 'foo' }).to.deep.equal({ name: 'foo' });
    expect({ name: 'foo' }).to.have.property('name').to.equal('foo');
    expect(5 > 8).to.be.false;
    //...
  });
});
