window.addEventListener("load",function(){
    const swOneday = new Swiper(".sw-oneday", {
        loop:true,
        slidesPerView: 4,
        spaceBetween: 51,
        navigation: {
            nextEl: ".oneday .bt-next",
            prevEl: ".oneday .bt-prev",
        },
    })
})