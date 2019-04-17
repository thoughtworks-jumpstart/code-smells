class User {
  constructor(firstName, lastName) {
    this.name = new Name(firstName, lastName);
  }
}

class Name {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFormattedName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
