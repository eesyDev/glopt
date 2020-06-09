$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png"></img></button>',
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    });
});

// $('.carousel_inner').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 1,
//     arrows: true,
//   });