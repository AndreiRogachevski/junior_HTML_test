const burger = document.querySelector('.header__burger');
console.log(burger);
const navBar = document.querySelector('.navigation');
console.log(navBar);
burger.addEventListener('click', () => {
  navBar.classList.toggle('navigation_active');
});
