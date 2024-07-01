
// create HTML code (scroll up btn)

function createScrollBtn() {

  const main = document.getElementById('main'); // <main> inizialisation

  const footer = document.getElementById('footer'); // <footer> inizialisation

  const scrollBtnContainer = document.createElement('div'); // create scroll up btn container
  scrollBtnContainer.classList.add('scroll-btn-container');
  footer.append(scrollBtnContainer);

  // HTML code (scroll up btn)

  scrollBtnContainer.innerHTML = `

    <div class="scroll-btn" id="scroll-btn">
      <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="76" cy="76" r="53" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M76 152C117.974 152 152 117.974 152 76C152 34.0264 117.974 0 76 0C34.0264 0 0 34.0264 0 76C0 117.974 34.0264 152 76 152ZM115.297 96.4978L81.1949 37.4889C78.8849 33.4918 73.1151 33.4918 70.8051 37.4889L36.7026 96.4978C34.3909 100.498 37.2775 105.5 41.8975 105.5H110.103C114.722 105.5 117.609 100.498 115.297 96.4978Z" fill="#888888"/>
      </svg>
    </div>

  `

  const scrollBtn = document.getElementById('scroll-btn'); // (scroll up btn) inizialisation

  window.addEventListener('scroll', showScrollBtn);

  // function show scroll btn by scroll

  function showScrollBtn() {
    if (window.scrollY > document.documentElement.clientHeight) {
      scrollBtn.classList.add('scroll-btn_visible');
    } else {
      scrollBtn.classList.remove('scroll-btn_visible');
    }
  }

   // function scroll by click scroll btn

  scrollBtn.addEventListener('click', scrollUp);

  function scrollUp() {
    if (window.scrollY > 0) {
      window.scrollBy(0, -100);
      setTimeout(scrollUp, 0);
    }
  }

}

// export functions

export default createScrollBtn; // scroll up btn
