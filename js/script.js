$(document).ready(function(){
    $('.reviews_carousel').slick({
        speed: 1200,
        autoplay: true,
        pauseOnHover: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrowleft_reviews.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrowright_reviews.svg"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.promo_navigation'),
    menuItem = document.querySelectorAll('.promo_navigation_item'),
    hamburger = document.querySelector('.hamburger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('promo_navigation_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('promo_navigation_active');
        })
    });
});