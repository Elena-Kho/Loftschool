let headerMenu = document.querySelector('.header__menu');
let headerToggle = document.querySelector('.header__toggle');
let navLink = document.querySelector('.nav__list');

headerMenu.classList.remove('header__menu--no-js');
headerToggle.addEventListener('click', function() {
  if (headerMenu.classList.contains('header__menu--header-closed')) {
    headerMenu.classList.remove('header__menu--header-closed');
    headerMenu.classList.add('header__menu--header-opened');
    navLink.addEventListener('click', function() {
      headerMenu.classList.remove('header__menu--header-opened');
      headerMenu.classList.add('header__menu--header-closed');
    });
  } else {
      headerMenu.classList.add('header__menu--header-closed');
      headerMenu.classList.remove('header__menu--header-opened');
    }
});
