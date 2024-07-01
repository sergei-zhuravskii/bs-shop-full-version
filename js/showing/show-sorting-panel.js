
// function sorting panel

function showSortingPanel() {

  const sortingPanel = document.querySelector('[data-name="sorting-panel_mobile"]');
  const sortingPanelBtnOpen = document.querySelector('[data-name="sorting-panel-btn-open"]');
  const sortingPanelBtnClose = document.querySelector('[data-name="sorting-panel-btn-close"]');
  const sortingSelections = document.querySelectorAll('[data="sorting"]');

  sortingPanelBtnOpen.addEventListener('click', openSortingPanel);  // btn open

  function openSortingPanel(event) {   // open function
    const body = document.querySelector('body'); // <body> inizialisation
    body.classList.add('body-scroll-off'); // body fixation

    event.preventDefault();

    sortingPanel.classList.add('active');
  }

  sortingPanelBtnClose.addEventListener('click', closeSortingPanel); // btn close

  sortingSelections.forEach((item) => {   // close by selection
    item.addEventListener('click', closeSortingPanel);
  })

  function closeSortingPanel(event) {   // close function
    const body = document.querySelector('body'); // <body> inizialisation
    body.classList.remove('body-scroll-off'); // body fixation

    event.preventDefault();

    sortingPanel.classList.remove('active');
  }

}

// export functions

export default showSortingPanel; // sorting panel
