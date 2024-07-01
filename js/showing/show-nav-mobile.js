
// function nav mobile

function showNavMobile() {

  const burgerMenuBtn = document.querySelector('.burger-menu-btn');
  const burgerMenu = document.querySelector('.burger-menu__list');

  burgerMenuBtn.addEventListener('click', showBurgerMenu);

  function showBurgerMenu() {
    burgerMenu.classList.toggle('active');
    burgerMenuBtn.classList.toggle('active')
  }

}

// export functions

export default showNavMobile; // nav mobile
