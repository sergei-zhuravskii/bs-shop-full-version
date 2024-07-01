
// import functions

import createCardSearching from '/bs-shop-full-version/create-html/create-card-searching.js'; // create searching card

import showImgSlider from '/bs-shop-full-version/showing/show-img-slider.js'; // show img slider in card

import showCardCounter from '/bs-shop-full-version/showing/show-card-counter.js'; // show counter in card

import createCart from '/bs-shop-full-version/create-html/create-cart.js'; // cart

// function search by number

function searchNumber(arr) {

  let searchKey = parseInt(document.querySelector('[data-name="search-input"]').value); // search input inizialisation
  let searchKeyMobile = parseInt(document.querySelector('[data-name="search-input_mobile"]').value); // search input (mobile) inizialisation
  let numbers = []; // empty array of numbers
  let arrNew;  // empty new array inizialisation

  for (let i = 0; i < arr.length; i++) { // push numbers to empty array
    numbers[i] = arr[i].number;
  };

  for (let i = 0; i < arr.length; i++) { // push numbers to empty array
    if (arr[i].number == searchKey || arr[i].number == searchKeyMobile) {
      arrNew = arr[i];
    }
  };

  if (numbers.includes(searchKey) || numbers.includes(searchKeyMobile)) { // search input conditions

    document.querySelector('.main-sections__cards-quantity-panel').classList.add('hidden'); // remove show more btn
    document.querySelector('.sorting-panel').style.display = 'none'; // remove sorting panel
    document.querySelectorAll('.cards-list__card').forEach((card) => card.remove()); // remove default cards

    createCardSearching(arrNew); // create searching <cards-list__card>
    showImgSlider(); // show img slider in card
    showCardCounter(); // show counter in card
    createCart(arr); // create cart

  } else {
    alert('Товар с таким артикулом не существует. Попробуйте снова.')
  }

}

// export functions

export default searchNumber; // export search by number
