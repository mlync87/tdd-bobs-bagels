const Basket = require('../src/basket.js')
const Item = require('../src/item.js')

// creating add to basket function
describe('add item to basket function', () => {
  it('add an item to basket', () => {
    // create a const that will update the basket when items are added
    const basket = new Basket()
    const expected = [new Item('Blueberry')]
    // create a const to contain the updated basket whe items are added
    const result = basket.addItemToBasket('Blueberry')
    // confirm the results
    expect(result).toEqual(expected)
  })
  // enable the user to add two or more of the same
  it('add duplicate items to basket', () => {
    // create a const that will update the basket when items are added
    // enable user to add multiples of the same item
    const basket = new Basket()
    const expected = [new Item('Blueberry'), new Item('Blueberry')]
    // create a const to update the basket with multiples of the same item.
    const result = basket.addItemToBasket('Blueberry', 2)
    // confirm the result
    expect(result).toEqual(expected)
  })
  // set a limit to the amount of bagels that can be added to the basket
  it('you cannot add anymore items as basket is full', () => {
    // create a const to show the updated basket when items are added
    const basket = new Basket()
    // set a limit for the amount of items in the basket(10)
    // have a text alert show up when user attempts to add too much
    const expected = 'basket at capacity, cannot add more'
    // display items in basket as well as the specified limit
    const result = basket.addItemToBasket('Blueberry', 10)
    // confirm the result
    expect(result).toEqual(expected)
  })
})
// create a function that enables users to remove items from the basket
describe('remove item from basket function', () => {
  it('removes an item from basket', () => {
    // set up
    const basket = new Basket()
    // add 2 different items to the basket to test.
    basket.addItemToBasket('Blueberry')
    basket.addItemToBasket('Chocolate Chip')
    // expecting only one item to remain after.
    const expected = [new Item('Chocolate Chip')]
    // remove specified item from users basket
    const result = basket.removeItemFromBasket('Blueberry')
    // confirm the result
    expect(result).toEqual(expected)
  })
  // create a function that will flag when items that aren't in the bask
  // are attempted to be removed.
  it('cant remove unknown bagel to basket', () => {
    // show a text alert when removal of unpresent item is attempted.
    const basket = new Basket()
    const expected = 'Bagel not found'
    // attempt to do this when item not present.
    const result = basket.removeItemFromBasket('Orange')
    // confirm the result
    expect(result).toEqual(expected)
  })
})

describe('basket is at capacity function', () => {
  it('displays an error message when more that 5 items attempt to be added', () => {
    // display items available to be added to the users basket
    const basket = new Basket()
    basket.addItemToBasket('Blueberry')
    basket.addItemToBasket('Chocolate Chip')
    basket.addItemToBasket('Chocolate Chip')
    basket.addItemToBasket('Blueberry')
    basket.addItemToBasket('Blueberry')
    basket.addItemToBasket('Cinnamon Raisin')
    basket.addItemToBasket('Chocolate Chip')

    const expected = 'basket at capacity, cannot add more'
    // update the basket values accordingly
    const result = basket.addItemToBasket('Blueberry')
    // confirm the result
    expect(result).toEqual(expected)
  })
})

describe('basket full function', () => {
  it('updates maximum capacity of the basket', () => {
    // display current basket at max capacity
    const basket = new Basket(10)
    // expected result when 11th item attempted adding
    const expected = 'basket at capacity, cannot add more'
    // attempt to display basket with 1 item over capacity
    const result = basket.addItemToBasket('blueberry', 11)
    // confirm expected result
    expect(result).toEqual(expected)
  })
})

describe('check price of item', () => {
  it('displays item price', () => {
    // set up our test
    const item = new Item()
    // expected item price
    const expected = 2.99
    // use empty parentheses to contain item price
    const result = item.checkPrice()
    // confirm the result
    expect(result).toEqual(expected)
  })
})

describe('checkout', () => {
  it('display the summation of individually priced items', () => {
    // create a basket with multiple items in it to see if addition works
    const basket = new Basket()
    basket.addItemToBasket('Blueberry')
    basket.addItemToBasket('Chocolate Chip')
    basket.addItemToBasket('Cinnamon Raisin')

    const expected = 8.97
    // display the expected result
    const result = basket.checkoutTotalPrice()
    // confirm the result
    expect(result).toEqual(expected)
  })
})
