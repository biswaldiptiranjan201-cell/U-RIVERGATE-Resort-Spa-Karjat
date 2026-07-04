const testimonialSwiper = new Swiper(".testimonial-slider", {

    loop: true,

    speed: 1000,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    spaceBetween: 30,

    slidesPerView: 1,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {

        768: {
            slidesPerView: 2
        }

    }

});