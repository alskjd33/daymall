window.addEventListener("load",function(){
    const swToday = new Swiper(".sw-today",{
        loop:true,
        slidesPerView: 4,
        spaceBetween: 51,
        navigation: {
            nextEl: ".today .bt-next",
            prevEl: ".today .bt-prev",
        },
    })
})