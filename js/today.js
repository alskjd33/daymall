window.addEventListener("load",function(){
    const swToday = new Swiper(".sw-today",{
        loop:true,
        slidesPerView: 3,
        // spaceBetween: 51,
        breakpoints:{
            768:{
                slidesPerView: 3,
                spaceBetween: 55,
            },
            1025:{
                slidesPerView: 4,
                spaceBetween: 55,
            },
            1281:{
                slidesPerView: 4,
                spaceBetween: 51,
            }
        },
        navigation: {
            nextEl: ".today .bt-next",
            prevEl: ".today .bt-prev",
        },
    })
})