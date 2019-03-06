const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;

chai.use(sinonChai);

var Order = require('./order');
var sandbox = sinon.createSandbox();


describe('order', () => {
  let warnStub, dateSpy, user, items, o;

  beforeEach(() => {
    warnStub = sandbox.stub(console, 'warn');
    dateSpy = sandbox.spy(Date, 'now');

    user = { id: 1, name: 'foo' };
    items = [
      { name: 'Book', price: 10 },
      { name: 'Dice set', price: 5 },
    ];

    o = new Order(123, user, items);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create instance or Order and calculate total + shipping', () => {
    expect(o).to.be.instanceOf(Order);
    expect(dateSpy).to.have.been.calledTwice;
    expect(o).to.have.property('ref').to.equal(123);
    expect(o).to.have.property('user').to.deep.equal(user);
    expect(o).to.have.property('items').to.deep.equal(items);
    expect(o).to.have.property('status').to.equal('Pending');
    expect(o).to.have.property('createdAt').to.be.a('Number');
    expect(o).to.have.property('updatedAt').to.be.a('Number');
    expect(o).to.have.property('subtotal').to.equal(15);
    expect(o).to.have.property('shipping').to.equal(5);
    expect(o).to.have.property('total').to.equal(20);

    expect(o.save).to.be.a('function');
    expect(o.cancel).to.be.a('function');
    expect(o.ship).to.be.a('function');
  });
});
