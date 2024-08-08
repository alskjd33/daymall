window.addEventListener("load",function(){
    const topBtn = document.querySelector("#gotop")
  topBtn.addEventListener("click", function(e){
    e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
  });
})