class Delivery {
  rating(aDriver) {
    return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
  }
  moreThanFiveLateDeliveries(aDriver) {
    return aDriver.numberOfLateDeliveries > 5;
  }
}

class FoodDelivery extends Delivery {}
