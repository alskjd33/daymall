window.addEventListener("load",function(){
    const swCoupon = new Swiper(".sw-coupon",{
        slidesPerView: 2.2,
        breakpoints:{
            320:{
                slidesPerView: 3.5
            },
            768:{
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