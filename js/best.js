window.addEventListener("load",function(){
    const swBest = new Swiper(".sw-best",{
        loop:true,
        slidesPerView: 4,
        spaceBetween: 60,
        breakpoint:{
            1025:{
                slidesPerView: 4,
                spaceBetween: 60,
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