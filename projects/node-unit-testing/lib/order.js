class Order {
  constructor(ref, user, items) {
    this.ref = ref;
    this.user = user;
    this.items = items;
    this.status = 'Pending';
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
    this.subtotal = 0;

    for (let item of items) {
      // console.log(item);
      this.subtotal += item.price;
    }

    if (this.subtotal <= 50) {
      this.shipping = 5;
    }
    else {
      this.shipping = 10;
    }

    this.total = this.subtotal + this.shipping;
  }

  save() {
    // ..some logic..

    this.status = 'Active';
    this.updatedAt = Date.now();

    let o = {
      ref: this.ref,
      user: this.user.name,
      updatedAt: this.updatedAt,
      status: this.status,
      items: this.items,
      shipping: this.shipping,
      total: this.total
    };

    return o;
  }

  cancel() {}
}

Order.prototype.ship = function () {}


module.exports = Order;
