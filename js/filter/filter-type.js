
// import functions

import createCards from '/bs-shop-full-version/js/create-html/create-cards.js'; // create cards

import showImgSlider from '/bs-shop-full-version/js/showing/show-img-slider.js'; // show img slider in card

import showCardCounter from '/bs-shop-full-version/js/showing/show-card-counter.js'; // show counter in card

import createCart from '/bs-shop-full-version/js/create-html/create-cart.js'; // cart

// function filter (type)

function filterType(arr, type) {

  document.querySelector('.main-sections__cards-quantity-panel').classList.add('hidden'); // remove show more btn
  document.querySelectorAll('.cards-list__card').forEach((card) => card.remove()); // remove default cards

  let arrNew = arr.filter(item => item.type === type); // filter array of products

  createCards(arrNew); // create filtering <cards-list__card>
  showImgSlider(); // show img slider in card
  showCardCounter(); // show counter in card
  createCart(arr); // create cart

}

// export functions

export default filterType; // export filter (type)
