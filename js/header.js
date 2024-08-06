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

  // 클릭시 서치바 나오기

});
