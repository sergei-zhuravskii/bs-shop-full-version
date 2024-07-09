
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

    modalContainer.classList.remove('hidden');
    modalBtn.addEventListener('click', closeModal);
    body.classList.add('body-scroll-off');
    if (window.innerWidth > 770) {
      body.classList.add('body-offset');
    }

    function closeModal() {
      modalContainer.classList.add('hidden');
      body.classList.remove('body-scroll-off');
      if (window.innerWidth > 770) {
        body.classList.remove('body-offset');
      }
    }

  }

}

// export functions

export default showNotice; // show notice
