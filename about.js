let aboutBackground;

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

  window.addEventListener("scroll", (event) => {

    aboutParallax(event);

  })

})
