
// function show img slider in card

function showImgSlider() {

  let cards = document.querySelectorAll('.cards-list__card');

  cards.forEach((card) => {

    const btnPrevious = card.querySelector('.btn-switching__btn-previous');
    const btnNext = card.querySelector('.btn-switching__btn-next');
    const slider = card.querySelectorAll('[data-name="slider-img"]');
    const positions = card.querySelectorAll('[data-name="switching-position"]');

    let imgIndex = 1; // img start index

    let switchingIndex = 1; // position start index

    switchImgs(imgIndex); // imgs

    switchPosition(imgIndex); // positions

    function switchImgs(index) {   // imgs
      if (index > slider.length) {
        imgIndex = 1;
      }
      if (index < 1) {
        imgIndex = slider.length;
      }
      for (let img of slider) {
        img.style.display = 'none';
      }

      slider[imgIndex - 1].style.display = 'flex';
    }

    function switchPosition(index) {   // positions
      if (index > positions.length) {
        switchingIndex = 1;
      }
      if (index < 1) {
        switchingIndex = positions.length;
      }
      for (let position of positions) {
        position.style.backgroundColor = '#C0C0C0';
      }

      positions[switchingIndex - 1].style.backgroundColor = '#F57000';
    }

    btnPrevious.addEventListener('click', showPreviousImg); // img and position by btnPrevious

    function showPreviousImg() {
      switchImgs(imgIndex -= 1);
      switchPosition(switchingIndex -= 1);
    }

    btnNext.addEventListener('click', showNextImg); // img and position by btnNext

    function showNextImg() {
      switchImgs(imgIndex += 1);
      switchPosition(switchingIndex += 1);
    }

  })

}

// export functions

export default showImgSlider; // show img slider in card
