window.addEventListener("load", function () {
  const hCate1List = this.document.querySelectorAll(".hCate1List");
  hCate1List.forEach(function (cate1) {
    // console.log(cate1);
    cate1.addEventListener("click", function () {
      hCate1List.forEach(function (i) {
        // console.log(i);
        if (i !== cate1) {
          i.classList.remove("active");
        }
      });
      cate1.classList.toggle("active");
    });
  });
  //cate768 클릭시 대카테고리 나오기
  const bars = this.document.querySelector(".fa-bars");
  const hCate768 = this.document.querySelector(".h_cate768");
  const xmark = this.document.querySelector(".fa-xmark");
  bars.addEventListener("click", function () {
    hCate768.classList.toggle("active");
  });
  //클릭시 카테고리 닫기
  xmark.addEventListener("click",function(){
    hCate768.classList.remove("active");
  })
  // 클릭시 소카테고리 나오기
  //태블릿 에서 서치아이콘 클릭시 서치바 나오기
  const tabSearchBtn = this.document.querySelector(".header_icon .fa-magnifying-glass")
  const tabSearch = this.document.querySelector(".tab-search")
  tabSearchBtn.addEventListener("click",function(){
    tabSearch.classList.toggle("active")
  })
  // 모바일 에서 서치아이콘 클릭시 서치바 나오기
  const mbSearchBtn = this.document.querySelector(".header_icon_320 .fa-magnifying-glass")
  const mbSearch = this.document.querySelector(".mb-search")
  const mbSearchClose = this.document.querySelector(".mb-search .fa-xmark")
  mbSearchBtn.addEventListener("click",function(){
    mbSearch.classList.add("active")
  })
  mbSearchClose.addEventListener("click",function(){
    mbSearch.classList.remove("active")
  })
});
$(document).ready(function () {
  $(".hCate1List_768").click(function () {
    $(this).find(".h_cate_2_768 li").stop().slideToggle();
  });
});
