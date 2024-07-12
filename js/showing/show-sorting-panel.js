
// function sorting panel

function showSortingPanel() {

  const sortingPanel = document.querySelector('[data-name="sorting-panel_mobile"]');
  const sortingPanelBtnOpen = document.querySelector('[data-name="sorting-panel-btn-open"]');
  const sortingPanelBtnClose = document.querySelector('[data-name="sorting-panel-btn-close"]');
  const sortingSelections = document.querySelectorAll('[data="sorting"]');

  sortingPanelBtnOpen.addEventListener('click', openSortingPanel);  // btn open

  function openSortingPanel() {   // open function
    const body = document.querySelector('body');

    body.classList.add('body-scroll-off');
    sortingPanel.classList.add('active');
  }

  sortingPanelBtnClose.addEventListener('click', closeSortingPanel); // btn close

  sortingSelections.forEach((item) => {   // close by selection
    item.addEventListener('click', closeSortingPanel);
  })

  function closeSortingPanel() {   // close function
    const body = document.querySelector('body');

    body.classList.remove('body-scroll-off');
    sortingPanel.classList.remove('active');
  }

}

// export functions

export default showSortingPanel; // sorting panel
