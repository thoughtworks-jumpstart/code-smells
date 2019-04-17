class Order {
  checkout(aProducts, oCustomer) {
    if (!oCustomer.isNotFlagged()) {
      // the customer account is flagged
      // log some errors and return
      return;
    }
    // normal order processing
  }
}
