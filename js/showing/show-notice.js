
// function show-notice

function showNotice() {

  const noticeLinks = document.querySelectorAll('.notice-link'); // notice-links iniaialisation

  noticeLinks.forEach(link => {   // event for click by links
    link.addEventListener('click', openModal);
  })

  // function show notice
  function openModal() {

    const modalContainer = document.querySelector('.notice__modal-container');
    const modalBtn = document.querySelector('.modal__btn');
    const body = document.querySelector('body');
    const headerTopMobile = document.querySelector('.header__header-top_mobile');

    modalContainer.classList.remove('hidden');
    modalBtn.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', closeModal);
    body.classList.add('body-scroll-off');
    body.classList.add('body-offset');
    headerTopMobile.style.width = 'calc(100% - 17px)';

    function closeModal() {
      modalContainer.classList.add('hidden');
      body.classList.remove('body-scroll-off');
      body.classList.remove('body-offset');
      headerTopMobile.style.width = '100%';
    }

  }

}

// export functions

export default showNotice; // show notice
