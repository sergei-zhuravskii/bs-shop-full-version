
// function search panel

function showSearchPanel() {

  const searchPanel = document.querySelector('[data-name="search-panel_mobile"]');
  const searchPanelBtnOpen = document.querySelector('[data-name="search-panel-btn-open"]');
  const searchPanelBtnClose = document.querySelector('[data-name="search-panel-btn-close"]');
  const searchPanelBtn = document.querySelector('.search-panel__btn_mobile');

  searchPanelBtnOpen.addEventListener('click', openSearchPanel);

  function openSearchPanel() {  // function open search panel
    const body = document.querySelector('body'); // <body> inizialisation

    body.classList.add('body-scroll-off'); // body fixation
    searchPanel.classList.add('active');
  }

  function closeSearchPanel() {  // function close search panel
    const body = document.querySelector('body'); // <body> inizialisation

    body.classList.remove('body-scroll-off'); // body fixation
    searchPanel.classList.remove('active');
  }

  searchPanelBtn.addEventListener('click', closeSearchPanel); // close search panel by search btn
  searchPanelBtnClose.addEventListener('click', closeSearchPanel); // close search panel by close btn

}

// export functions

export default showSearchPanel; // search panel
