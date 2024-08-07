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
  //cate768 클릭시 나오기
const bars = this.document.querySelector (".fa-bars")
const hCate768 = this.document.querySelector (".h_cate768")
bars.addEventListener("click" , function(){
  hCate768.classList.toggle("active")
})
  // 클릭시 서치바 나오기

});
