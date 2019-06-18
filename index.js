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
      if (i < cart.length) {
        cartmessage.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      } 
    }
    if (cart.length > 1) {
    var j = cart.length
    cartmessage.push(`and ${cart[j].itemName} at $${cart[j].itemPrice}`)}
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
