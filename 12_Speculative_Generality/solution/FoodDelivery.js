//Favor Simplicity, KISS

class FoodDelivery {
  rating(aDriver) {
    return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
  }
}
