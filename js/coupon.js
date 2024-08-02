window.addEventListener("load",function(){
    const swCoupon = new Swiper(".sw-coupon",{
        slidesPerView: 3.3,
        breakpoints:{
            1025:{
                slidesPerView: 4,
                // spaceBetween: 60,
            },
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