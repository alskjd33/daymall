window.addEventListener("load" ,function(){
    function checkOnlyOne(element) {
        const checkboxes 
            = document.getElementsByName("gender");
        checkboxes.forEach((cb) => {
          cb.checked = false;
        })
        element.checked = true;
      }
})