window.addEventListener("load",function(){
    const swToday = new Swiper(".sw-today",{
        loop:true,
        slidesPerView: 2.2,
        spaceBetween: 51,
        breakpoints:{
            321:{
                slidesPerView:2,
            },
            350:{
                slidesPerView:2.2,
            },
            400:{
                slidesPerView:2.5,
            },
            470:{
                slidesPerView:3,
            },
            481:{
                slidesPerView:2.1,
            },
            520:{
                slidesPerView:2.5,
            },
            570:{
                slidesPerView:2.8,
            },
            630:{
                slidesPerView:3,
            },
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
            nextEl: ".today .bt-next",
            prevEl: ".today .bt-prev",
        },
    })
})