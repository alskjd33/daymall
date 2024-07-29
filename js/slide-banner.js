window.addEventListener("load", function(){
    const swBanner = new Swiper(".sw-banner", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        loop:true,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    })
})