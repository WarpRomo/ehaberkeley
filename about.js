let aboutBackground;

window.addEventListener("scroll", (event) => {
  /*
  if(window.scrollY > 180){
    document.getElementById("navBar").style.opacity = 0;
  }
  else{
    document.getElementById("navBar").style.opacity = 1;
  }
  */

  aboutParallax(event);

})

function aboutParallax(event){
  console.log("scrolled");

  let e = aboutBackground;

  let scrollAmount = window.scrollY;

  console.log(e.style.transform, "hi");

  e.style.transform = `translate3d(0, ${scrollAmount*-0.5}px, 0)`;

}

window.addEventListener("load", (event) => {

  aboutBackground = document.getElementById("aboutBackground");

  aboutParallax();

})
