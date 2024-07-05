
// function sorting panel

function showSortingPanel() {

  const sortingPanel = document.querySelector('[data-name="sorting-panel_mobile"]');
  const sortingPanelBtnOpen = document.querySelector('[data-name="sorting-panel-btn-open"]');
  const sortingPanelBtnClose = document.querySelector('[data-name="sorting-panel-btn-close"]');
  const sortingSelections = document.querySelectorAll('[data="sorting"]');

  sortingPanelBtnOpen.addEventListener('click', openSortingPanel);  // btn open

  function openSortingPanel() {   // open function
    const body = document.querySelector('body');
    const headerTopMobile = document.querySelector('.header__header-top_mobile');

    body.classList.add('body-scroll-off');
    body.classList.add('body-offset');
    headerTopMobile.style.width = 'calc(100% - 17px)';
    sortingPanel.classList.add('active');
  }

  sortingPanelBtnClose.addEventListener('click', closeSortingPanel); // btn close

  sortingSelections.forEach((item) => {   // close by selection
    item.addEventListener('click', closeSortingPanel);
  })

  function closeSortingPanel() {   // close function
    const body = document.querySelector('body');
    const headerTopMobile = document.querySelector('.header__header-top_mobile');

    body.classList.remove('body-scroll-off');
    body.classList.remove('body-offset');
    headerTopMobile.style.width = '100%';
    sortingPanel.classList.remove('active');
  }

}

// export functions

export default showSortingPanel; // sorting panel
