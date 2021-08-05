
    function myFunction(x) {
  if (x.matches) { 
    document.querySelector("#anton_img-nav").setAttribute("style", "display:block");
    document.querySelector("#anton_text-nav").setAttribute("style", "display:none");

  } else {
    document.querySelector("#anton_img-nav").setAttribute("style", "display:none");
    document.querySelector("#anton_text-nav").setAttribute("style", "display:block");
  }
}

var x = window.matchMedia("(max-width: 992px)")
myFunction(x) 
x.addEventListener("change", myFunction) 
