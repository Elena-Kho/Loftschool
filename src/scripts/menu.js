let headerMenu = document.querySelector('.header__menu');
let headerToggle = document.querySelector('.header__toggle');

headerMenu.classList.remove('header__menu--no-js');
headerToggle.addEventListener('click', function() {
  if (headerMenu.classList.contains('header__menu--header-closed')) {
    headerMenu.classList.remove('header__menu--header-closed');
    headerMenu.classList.add('header__menu--header-opened');
  } else {
      headerMenu.classList.add('header__menu--header-closed');
      headerMenu.classList.remove('header__menu--header-opened');
    }
});
