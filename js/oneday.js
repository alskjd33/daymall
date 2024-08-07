window.addEventListener("load",function(){
    const swOneday = new Swiper(".sw-oneday", {
        loop:true,
        slidesPerView: 3,
        // spaceBetween: 51,
        breakpoints:{
            768:{
                slidesPerView: 3,
                spaceBetween: 54,
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
            nextEl: ".oneday .bt-next",
            prevEl: ".oneday .bt-prev",
        },
    })
})