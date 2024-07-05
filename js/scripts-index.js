
// import functions

import createHeaderFull from '/bs-shop-full-version/js/create-html/create-header-full.js'; // full <header> (only Index.html)

import createFooter from '/bs-shop-full-version/js/create-html/create-footer.js'; // <footer>

import createCards from '/bs-shop-full-version/js/create-html/create-cards.js'; // card

import createCart from '/bs-shop-full-version/js/create-html/create-cart.js'; // cart

import createScrollBtn from '/bs-shop-full-version/js/create-html/create-scroll-btn.js'; // scroll up btn

import showNavMobile from '/bs-shop-full-version/js/showing/show-nav-mobile.js'; // nav mobile

import showFilterPanel from '/bs-shop-full-version/js/showing/show-filter-panel.js'; // filter panel

import showFilterAccordeon from '/bs-shop-full-version/js/showing/show-filter-accordeon.js'; // filter accordeon

import showSortingPanel from '/bs-shop-full-version/js/showing/show-sorting-panel.js'; // sorting panel

import showSearchPanel from '/bs-shop-full-version/js/showing/show-search-panel.js'; // search panel

import showMoreCards from '/bs-shop-full-version/js/showing/show-more-cards.js'; // show more cards

import showImgSlider from '/bs-shop-full-version/js/showing/show-img-slider.js'; // show img slider in card

import showCardCounter from '/bs-shop-full-version/js/showing/show-card-counter.js'; // show counter in card

import sortingRandom from '/bs-shop-full-version/js/sorting/sorting-random.js'; // random mix list of products

import filterType from '/bs-shop-full-version/js/filter/filter-type.js'; // filter (type)

import filterAvailability from '/bs-shop-full-version/js/filter/filter-availability.js'; // filter (availability)

import filterDiving from '/bs-shop-full-version/js/filter/filter-diving.js'; // filter (diving)

import filterLength from '/bs-shop-full-version/js/filter/filter-length.js'; // filter (length)

import filterWeight from '/bs-shop-full-version/js/filter/filter-weight.js'; // filter (weight)

import filterPrice from '/bs-shop-full-version/js/filter/filter-price.js'; // filter (price)

import sortingTitle from '/bs-shop-full-version/js/sorting/sorting-title.js'; // sorting (title)

import sortingPriceIncrease from '/bs-shop-full-version/js/sorting/sorting-price-increase.js'; // sorting (price increase)

import sortingPriceReduction from '/bs-shop-full-version/js/sorting/sorting-price-reduction.js'; // sorting (price reduction)

import searchNumber from '/bs-shop-full-version/js/searching/search-number.js'; // search by number

import showCartCounter from '/bs-shop-full-version/js/showing/show-cart-counter.js'; // show counter in cart

import deleteCartItem from '/bs-shop-full-version/js/showing/delete-cart-item.js'; // delete item in cart

import showNotice from '/bs-shop-full-version/js/showing/show-notice.js'; // show notice

// import objects

import products from '/bs-shop-full-version/js/arrays/products.js'; // products

// launch importing functions by reboot

createHeaderFull(); // create <header>

createFooter(); // create <footer>

createScrollBtn(); // create scroll up btn

sortingRandom(products); // random mix list of products

createCards(products); // create <cards-list__card> (cards)

createCart(products); // create cart

showNavMobile(); // nav mobile

showFilterPanel(); // filter panel

showFilterAccordeon(); // filter accordeon

showSortingPanel(); // sorting panel

showSearchPanel(); // search panel

showImgSlider(); // show img slider in card

showCardCounter(); // show counter in card

showCartCounter(); // show counter in cart

deleteCartItem(); // delete item in cart

showNotice(); // showNotice

// launch importing functions by action

// show more cards

document.querySelector('.cards-quantity-panel__btn-show-more').addEventListener('click', () => showMoreCards());

// filter (type)

document.querySelectorAll('[data-name="filter-type"]').forEach((item) => {

  item.addEventListener('click', () => filterType(products, item.getAttribute('data-type')));

});

// filter (availability)

document.querySelectorAll('[data-name="filter-availability"]').forEach((item) => {

  item.addEventListener('click', () => filterAvailability(products, item.getAttribute('data-type')));

});

// filter (diving)

document.querySelectorAll('[data-name="filter-diving"]').forEach((item) => {

  item.addEventListener('click', () => filterDiving(products, item.getAttribute('data-type')));

});

// filter (length)

document.querySelector('#filter-length-btn').addEventListener('click', function() {  // desktop version
  if (document.querySelector('#lengthFrom').value > 150.1 || document.querySelector('#lengthTo').value < 39.9) {
    alert('Товаров с такими параметрами не нашлось. Уточните поиск.')
  } else {filterLength(products, document.querySelector('#lengthFrom').value, document.querySelector('#lengthTo').value)}
});

document.querySelector('#filter-length-btn-mobile').addEventListener('click', function() {  // mobile version
  if (document.querySelector('#lengthFromMobile').value > 150.1 || document.querySelector('#lengthToMobile').value < 39.9) {
    alert('Товаров с такими параметрами не нашлось. Уточните поиск.')
  } else {filterLength(products, document.querySelector('#lengthFromMobile').value, document.querySelector('#lengthToMobile').value)}
});

// filter (weight)

document.querySelector('#filter-weight-btn').addEventListener('click', function() {  // desktop version
  if (document.querySelector('#weightFrom').value > 50.1 || document.querySelector('#weightTo').value < 4.9) {
    alert('Товаров с такими параметрами не нашлось. Уточните поиск.')
  } else {filterWeight(products, document.querySelector('#weightFrom').value, document.querySelector('#weightTo').value)}
});

document.querySelector('#filter-weight-btn-mobile').addEventListener('click', function() {  // mobile version
  if (document.querySelector('#weightFromMobile').value > 50.1 || document.querySelector('#weightToMobile').value < 4.9) {
    alert('Товаров с такими параметрами не нашлось. Уточните поиск.')
  } else {filterWeight(products, document.querySelector('#weightFromMobile').value, document.querySelector('#weightToMobile').value)}
});

// filter (price)

document.querySelector('#filter-price-btn').addEventListener('click', function() {  // desktop version
  if (document.querySelector('#priceFrom').value > 1500.1 || document.querySelector('#priceTo').value < 399.9) {
    alert('Товаров с такими параметрами не нашлось. Уточните поиск.')
  } else {filterPrice(products, document.querySelector('#priceFrom').value, document.querySelector('#priceTo').value)}
});

document.querySelector('#filter-price-btn-mobile').addEventListener('click', function() {  // mobile version
  if (document.querySelector('#priceFromMobile').value > 1500.1 || document.querySelector('#priceToMobile').value < 399.9) {
    alert('Товаров с такими параметрами не нашлось. Уточните поиск.')
  } else {filterPrice(products, document.querySelector('#priceFromMobile').value, document.querySelector('#priceToMobile').value)}
});

// sorting (title)

document.querySelectorAll('[data-name="sorting-title"]').forEach((item) => {

  item.addEventListener('click', () => sortingTitle(products));

});

// sorting (price increase)

document.querySelectorAll('[data-name="sorting-price-increase"]').forEach((item) => {

  item.addEventListener('click', () => sortingPriceIncrease(products));

});

// sorting (price reduction)

document.querySelectorAll('[data-name="sorting-price-reduction"]').forEach((item) => {

  item.addEventListener('click', () => sortingPriceReduction(products));

});

// search by number

document.querySelectorAll('[data-name="search-btn"]').forEach((item) => {

  item.addEventListener('click', () => searchNumber(products));

});
