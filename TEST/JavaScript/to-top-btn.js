window.onscroll = function() {scrollFunction()};

mybutton = document.getElementById("myBtn");
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
  if(window.pageYOffset >= sticky){
    navbar.classList.add("sticky");
  }
  else{
    navbar.classList.remove("sticky");
  }
}

// kattintás után a tetejére úszik
function topFunction() {
  document.documentElement.scrollTop = 0;   // For Chrome, Firefox, IE and Opera
}
