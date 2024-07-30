window.addEventListener("load",function(){
    const swCoupon = new Swiper(".sw-coupon",{
        slidesPerView: 4,
        navigation: {
            nextEl: ".coupon .bt-next",
            prevEl: ".coupon .bt-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    })
})