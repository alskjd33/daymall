window.addEventListener("load",function(){
    const swCateall = new Swiper(".sw-cateall", {
        loop:true,
        slidesPerView: 4,
        spaceBetween: 51,
        navigation: {
            nextEl: ".cateall-slide .bt-next",
            prevEl: ".cateall-slide .bt-prev",
        },
    } )
    const swCateFood = new Swiper(".sw-catefood", {
        loop:true,
        slidesPerView: 4,
        spaceBetween: 51,
        navigation: {
            nextEl: ".catefood-slide .bt-next",
            prevEl: ".catefood-slide .bt-prev",
        },
    } )
    const swCateLife = new Swiper(".sw-catelife", {
        loop:true,
        slidesPerView: 4,
        spaceBetween: 51,
        navigation: {
            nextEl: ".catelife-slide .bt-next",
            prevEl: ".catelife-slide .bt-prev",
        },
    } )
    const swCateKitchen = new Swiper(".sw-catekitchen", {
        loop:true,
        slidesPerView: 4,
        spaceBetween: 51,
        navigation: {
            nextEl: ".catekitchen-slide .bt-next",
            prevEl: ".catekitchen-slide .bt-prev",
        },
    } )
    const swCateDog = new Swiper(".sw-catedog", {
        loop:true,
        slidesPerView: 4,
        spaceBetween: 51,
        navigation: {
            nextEl: ".catedog-slide .bt-next",
            prevEl: ".catedog-slide .bt-prev",
        },
    } )


    // 카테고리 클릭시 상품리스트 변경
    const cateList = this.document.querySelectorAll(".cate-title > li")
    const categorie = this.document.querySelector
})