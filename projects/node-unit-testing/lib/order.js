class Order {
  constructor(ref, user, items) {
    this.ref = ref;
    this.user = user;
    this.items = items;
    this.status = 'Pending';
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
    this.subtotal = 0;
  }
}
