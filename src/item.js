class Item {
  // display the individual item price
  price = 2.99
  // Constructor is a method and it will invoke automatically
  // whenever an instance of class or struct is created.
  constructor(name) {
    this.name = name
  }
  // use empty parentheses to contain updated price
  checkPrice() {
    return this.price
  }
}
module.exports = Item
