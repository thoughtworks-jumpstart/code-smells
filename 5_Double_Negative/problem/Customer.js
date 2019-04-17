class Customer {
  constructor() {
    this.nBalance = 0;
  }

  isNotFlagged() {
    return this.nBalance < 30;
  }
}
