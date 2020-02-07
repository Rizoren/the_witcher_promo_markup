var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 2
        }
    },
    navigation: {
        nextEl: '.arrow'
      },
    loop: true
});

var menu= document.querySelector('.header');
var menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
    menu.classList.toggle('header-active');
    menuButton.classList.toggle('menu-button-active');
});