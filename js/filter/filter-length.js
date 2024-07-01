
// import functions

import createCards from '/bs-shop-full-version/create-html/create-cards.js'; // create cards

import showImgSlider from '/bs-shop-full-version/showing/show-img-slider.js'; // show img slider in card

import showCardCounter from '/bs-shop-full-version/showing/show-card-counter.js'; // show counter in card

import createCart from '/bs-shop-full-version/create-html/create-cart.js'; // cart

// function filter (length)

function filterLength(arr, lengthFrom, lengthTo) {

  document.querySelector('.main-sections__cards-quantity-panel').classList.add('hidden'); // remove show more btn
  document.querySelectorAll('.cards-list__card').forEach((card) => card.remove()); // remove default cards

  let arrNew = arr.filter(item => item.length <= parseInt(lengthTo) && item.length >= parseInt(lengthFrom)); // filter array of products

  createCards(arrNew); // create filtering <cards-list__card>
  showImgSlider(); // show img slider in card
  showCardCounter(); // show counter in card
  createCart(arr); // create cart

  document.querySelectorAll('.cards-list__card').forEach(card => card.classList.remove('card-showing')); // show all cards

}

// export functions

export default filterLength; // export filter (length)
