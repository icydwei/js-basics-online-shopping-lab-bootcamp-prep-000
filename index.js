var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * Math.floor(100));
 var itemDetails = {};
 itemDetails.itemName = item;
 itemDetails.itemPrice = price;
 cart.push(itemDetails)
 return (`${item} has been added to your cart.`)
}

function viewCart() {
  var cartmessage = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else for (var i = 0; i < cart.length; i++) {
      cartmessage.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      } 
      return `In your cart, you have ${cartmessage.join(", ")}.`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
