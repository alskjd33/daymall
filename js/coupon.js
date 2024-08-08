window.addEventListener("load",function(){
    const swCoupon = new Swiper(".sw-coupon",{
        slidesPerView: 2,
        breakpoints:{
            320:{
                slidesPerView: 2.2
            },
            768:{
                slidesPerView: 3.5,
                // spaceBetween: 60,
            },
            1280:{
                slidesPerView:4
            }
        },
        navigation: {
            nextEl: ".coupon .bt-next",
            prevEl: ".coupon .bt-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    })
})