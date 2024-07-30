window.addEventListener("load", function(){
    const swBanner = new Swiper(".sw-banner", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        loop:true,
        slidesPerView: 1,
        navigation: {
            nextEl: ".sw-banner .bt-next",
            prevEl: ".sw-banner .bt-prev",
        },
        pagination: {
            el: ".sw-banner .swiper-pagination",
        },
    })
})