
// function calculate price in cart

function calculateCartPrice() {

  // inizialisation all products in cart
  const cartProducts = document.querySelectorAll('.products-list__product-item');

  let cartTotalPrice = 0; // inizialisation total price

  // calculate current product price for each item
  cartProducts.forEach((item) => {
    const productCounter = item.querySelector('.product-price__counter-value');
    const productPriceCurrent = item.querySelector('.product-price__product-price');

    const productPriceTotal = parseInt(productPriceCurrent.innerText) * parseInt(productCounter.innerText);

    cartTotalPrice = cartTotalPrice + productPriceTotal;

    item.querySelector('.product-price__total-price').innerText = productPriceTotal; // calculate product total price
    document.querySelector('.place-order__total-price').innerText = cartTotalPrice; // calculate cart total price
  });

};

// export functions

export default calculateCartPrice; // export calculate price in cart
