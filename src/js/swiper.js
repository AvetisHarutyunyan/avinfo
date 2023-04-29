"use strict";

new Swiper(".project__items", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        }
    }
});