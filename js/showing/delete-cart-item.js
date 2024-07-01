
// import showCartCounter from '/bs-shop-full-version/showing/showCartCounter.js'; // show counter in cart

import calculateCartPrice from '/bs-shop-full-version/showing/calculate-cart-price.js'; // calculate price in cart

// function delete item in cart

function deleteCartItem() {

  // event by window (click)
  window.addEventListener('click', function(event) {

    // event (click) by button (close)
    if (event.target.dataset.btn === "delete-cart-item") {
      const cartProduct = event.target.closest('.products-list__product-item');

      cartProduct.remove(); // remove item in cart

      calculateCartPrice(); // calculate price in cart

      // increase cart icon counter in <footer>

      const cartIconCounter = document.querySelector('.cart-icon__counter'); // inizialisation cart counter (desktop version)
      const cartIconCounterMobile = document.querySelector('.cart-icon__counter_mobile'); // inizialisation cart counter (mobile version)
      const addedProductsQuantity = document.querySelectorAll('.products-list__product-item').length;

      cartIconCounter.innerText = parseInt(addedProductsQuantity); // count cart counter (desktop version)
      cartIconCounterMobile.innerText = parseInt(addedProductsQuantity); // count cart counter (mobile version)
    };

    // inizialisation of all items in cart
    const cartProducts = document.querySelectorAll('.products-list__product-item');

    // remove (place-order) container and add (empty cart) container
    if (cartProducts.length < 1) {
      const emptyCartContainer = document.querySelector('.cart__empty-cart-container');
      const placeOrderWrapper = document.querySelector('.cart__place-order-wrapper');

      emptyCartContainer.style.display = 'flex';
      placeOrderWrapper.style.display = 'none';
    }

  });

};

// export functions

export default deleteCartItem; // show delete item in cart




