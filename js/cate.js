window.addEventListener("load",function(){
    const swCateall = new Swiper(".sw-cateall", {
        loop:true,
        slidesPerView: 2.5,
        spaceBetween: 30,
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
            nextEl: ".cateall-slide .bt-next",
            prevEl: ".cateall-slide .bt-prev",
        },
    } )
    const swCateFood = new Swiper(".sw-catefood", {
        loop:true,
        slidesPerView: 2.5,
        spaceBetween: 30,
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
            nextEl: ".catefood-slide .bt-next",
            prevEl: ".catefood-slide .bt-prev",
        },
    } )
    const swCateLife = new Swiper(".sw-catelife", {
        loop:true,
        slidesPerView: 2.5,
        spaceBetween: 30,
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
            nextEl: ".catelife-slide .bt-next",
            prevEl: ".catelife-slide .bt-prev",
        },
    } )
    const swCateKitchen = new Swiper(".sw-catekitchen", {
        loop:true,
        slidesPerView: 2.5,
        spaceBetween: 30,
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
            nextEl: ".catekitchen-slide .bt-next",
            prevEl: ".catekitchen-slide .bt-prev",
        },
    } )
    const swCateDog = new Swiper(".sw-catedog", {
        loop:true,
        slidesPerView: 2.5,
        spaceBetween: 30,
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
            nextEl: ".catedog-slide .bt-next",
            prevEl: ".catedog-slide .bt-prev",
        },
    } )


    // 카테고리 클릭시 상품리스트 변경
    const cateList = this.document.querySelectorAll(".cate-title > li > a")
    
    cateList.forEach(function(list){
        list.addEventListener("click",function(e){
            e.preventDefault()
            cateList.forEach(function(lists){
                lists.classList.remove("active")
            })
            this.classList.add("active")

            const cateItems = document.querySelectorAll(".categorie");
            cateItems.forEach(function (items) {
                items.style.display = "none";
            });

            const target = this.getAttribute("href");
            document.querySelector(target).style.display = "block";
        })
    })
    cateList[0].click();
})