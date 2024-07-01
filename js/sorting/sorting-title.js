
// import functions

import createCards from '/bs-shop-full-version/create-html/create-cards.js'; // create cards

import showImgSlider from '/bs-shop-full-version/showing/show-img-slider.js'; // show img slider in card

import showCardCounter from '/bs-shop-full-version/showing/show-card-counter.js'; // show counter in card

import createCart from '/bs-shop-full-version/create-html/create-cart.js'; // cart

// function sorting (title)

function sortingTitle(arr) {

  document.querySelector('.main-sections__cards-quantity-panel').classList.add('hidden'); // remove show more btn
  document.querySelectorAll('.cards-list__card').forEach((card) => card.remove()); // remove default cards

  arr.sort((a, b) => a.title.localeCompare(b.title));

  createCards(arr); // create filtering <cards-list__card>
  showImgSlider(); // show img slider in card
  showCardCounter(); // show counter in card
  createCart(arr); // create cart

  document.querySelectorAll('.cards-list__card').forEach(card => card.classList.remove('card-showing')); // show all cards

}

// export functions

export default sortingTitle; // export sorting (title)
