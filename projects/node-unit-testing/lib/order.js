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
}