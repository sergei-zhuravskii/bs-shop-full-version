
// function filter panel

function showFilterPanel() {

  const filterPanel = document.querySelector('[data-name="filter-panel_mobile"]');
  const filterPanelBtnOpen = document.querySelector('[data-name="filter-panel-btn-open"]');
  const filterPanelBtnClose = document.querySelector('[data-name="filter-panel-btn-close"]');
  const filterSelections = document.querySelectorAll('[data="filter"]');
  const filterBtns = document.querySelectorAll('.filter-item__btn');

  filterPanelBtnOpen.addEventListener('click', openFilterPanel);  // btn open

  function openFilterPanel(event) {   // open function
    const body = document.querySelector('body'); // <body> inizialisation
    body.classList.add('body-scroll-off'); // body fixation

    // event.preventDefault();

    filterPanel.classList.add('active');
  }

  filterPanelBtnClose.addEventListener('click', closeFilterPanel); // btn close

  filterSelections.forEach((item) => {   // close by selection
    item.addEventListener('click', closeFilterPanel);
  });

  filterBtns.forEach((item) => {   // close by selection
    item.addEventListener('click', closeFilterPanel);
  });

  function closeFilterPanel(event) {   // close function
    const body = document.querySelector('body'); // <body> inizialisation
    body.classList.remove('body-scroll-off'); // body fixation

    // event.preventDefault();

    filterPanel.classList.remove('active');
  }

}

// export functions

export default showFilterPanel; // filter panel
