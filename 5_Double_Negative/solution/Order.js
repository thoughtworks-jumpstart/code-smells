class Order {
  checkout(aProducts, oCustomer) {
    if (oCustomer.isFlagged()) {
      // the customer account is flagged
      // log some errors and return
      return;
    }
    // normal order processing
  }
}
