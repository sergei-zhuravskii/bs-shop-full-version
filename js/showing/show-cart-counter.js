
// import showCartCounter from '/bs-shop-full-version/showing/showCartCounter.js'; // show counter in cart

import calculateCartPrice from '/bs-shop-full-version/js/showing/calculate-cart-price.js'; // calculate price in cart

// function show counter in cart

function showCartCounter() {

  // event by window (click)
  window.addEventListener('click', function(event) {

    let counter; // inizialisation counter

    let cartProduct = event.target.closest('.products-list__product-item');

    // check for click by button (minus) and button (plus)
    if (event.target.dataset.action === "cart-minus" || event.target.dataset.action === "cart-plus") {
      const counterWrapper = event.target.closest('.product-price__counter-wrapper');

      counter = counterWrapper.querySelector('[data-counter]');
    };

    // event (click) by button (minus) _ reduce counter
    if (event.target.dataset.action === "cart-minus") {
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;

        calculateCartPrice(); // calculate price in cart
      } else {
        cartProduct.remove(); // remove item in cart if counter < 1

        calculateCartPrice(); // calculate price in cart

        // increase cart icon counter in <footer>
        const cartIconCounter = document.querySelector('.cart-icon__counter'); // inizialisation cart counter (desktop version)
        const cartIconCounterMobile = document.querySelector('.cart-icon__counter_mobile'); // inizialisation cart counter (mobile version)
        const addedProductsQuantity = document.querySelectorAll('.products-list__product-item').length;

        cartIconCounter.innerText = parseInt(addedProductsQuantity); // count cart counter (desktop version)
        cartIconCounterMobile.innerText = parseInt(addedProductsQuantity); // count cart counter (mobile version)
      }
    };

    // event (click) by button (plus) _ increase counter
    if (event.target.dataset.action === "cart-plus") {
      counter.innerText = ++counter.innerText;

      calculateCartPrice(); // calculate price in cart
    };

  });

};

// export functions

export default showCartCounter; // show counter in cart
