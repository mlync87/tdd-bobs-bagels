const Item = require('../src/item')
// allow the basket to update whenever user adds items
class Basket {
  currentBasket = []
  // Constructor is a method and it will invoke automatically
  // whenever an instance of class or struct is created.
  constructor(basketLimit = 5) {
    this.basketCapacity = basketLimit
  }
  // update values when multiples of same of diff items added
  addItemToBasket(name, numOfRequestedBagels = 1) {
    // if basket is full return text alert informing user
    if (this.isFull(numOfRequestedBagels))
      return 'basket at capacity, cannot add more'
    // use push to add selected item into the basket array
    for (let i = 0; i < numOfRequestedBagels; i++) {
      const item = new Item(name)
      this.currentBasket.push(item)
    }
    // display updated basket and contents
    return this.currentBasket
  }
  // removed items from basket
  removeItemFromBasket(name) {
    const selectedBagelIndex = this.currentBasket.findIndex(
      (bagel) => bagel.name === name
    )
    // if bagel is not in array a text alert will inform the user of such
    if (selectedBagelIndex === -1) return 'Bagel not found'
    // use splice to update the basket array accordingly
    this.currentBasket.splice(selectedBagelIndex, 1)
    // display the updated basket
    return this.currentBasket
  }
  // when basket is full, return updated capacity
  isFull(num) {
    return num + this.currentBasket.length > this.basketCapacity
  }
  // create a function that will show updated prices when they are added at
  // checkout
  checkoutTotalPrice() {
    const totalPrice = this.currentBasket.reduce(
      (acc, item) => (acc += item.price),
      0
    )
    // return the total price for all items in the basket
    return totalPrice
  }
}

module.exports = Basket
