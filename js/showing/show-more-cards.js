
// function show more cards

function showMoreCards() {

  document.querySelector('.main-sections__cards-quantity-panel').style.display = 'none'; // remove show more button

  let cards = document.querySelectorAll('.cards-list__card'); // choose all cards

  cards.forEach(element => { // change display (none to flex)
    element.style.display = 'flex';
  });

}

// export functions

export default showMoreCards; // export show more cards
