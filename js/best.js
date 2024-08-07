window.addEventListener("load",function(){
    const swBest = new Swiper(".sw-best",{
        loop:true,
        slidesPerView: 3,
        // spaceBetween: 60,
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
            nextEl: ".best .bt-next",
            prevEl: ".best .bt-prev",
        },
    })
})