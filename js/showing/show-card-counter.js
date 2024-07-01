
// function show counter in card

function showCardCounter() {

  // all cards inizialisation
  let cards = document.querySelectorAll('.cards-list__card');

  // current card inizialisation
  cards.forEach((card) => {

    const btnMinus = card.querySelector('[data-action="minus"]');
    const btnPlus = card.querySelector('[data-action="plus"]');
    const counter = card.querySelector('[data-counter]');

    // reduce quantity by btn (minus)
    btnMinus.addEventListener('click', function reduceQuantity() {
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
      }
    })

    // increase quantity by btn (plus)
    btnPlus.addEventListener('click', function increaseQuantity() {
      counter.innerText = ++counter.innerText;
    })

  })

}

// export functions

export default showCardCounter; // show counter in card
