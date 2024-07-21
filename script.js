
let yosemiteLayers = [];
let yosemitePower = [-0.6, -0.2, -0.07, 0];

let backgroundImages = [];

window.addEventListener("scroll", (event) => {

  if(window.scrollY > 180){
    document.getElementById("navBar").style.opacity = 0;
    document.getElementById("navBar").classList.add("nomouse");
  }
  else{
    document.getElementById("navBar").style.opacity = 1;
    document.getElementById("navBar").classList.remove("nomouse");
  }

  //yosemiteParallax(event)

})

setInterval(yosemiteParallax, 10);

setTimeout(() => {
  backInterval();
  setInterval(backInterval, 4000)
}, 1000)


function mobileOpen(){
  document.getElementById("navShown").style.left = "0%";
  document.body.classList.add("noscroll");
}
function mobileClose(){
  document.getElementById("navShown").style.left = "-120%";
  document.body.classList.remove("noscroll");
}

let imageSpots = new Set();
let usedImages = new Set();

function backInterval(){
  if(backgroundImages.length > 0){
    let oldImg = backgroundImages.shift();
    let spot = oldImg[1];
    let index = oldImg[2];
    oldImg = oldImg[0];
    setTimeout(() => {
      oldImg.style.opacity = 0;
      setTimeout(() => {
        oldImg.remove();
        imageSpots.delete(spot);
        usedImages.delete(index);
      }, 2000)
    }, 2300)

  }

  while(backgroundImages.length < 2){
    let newImg = document.createElement("img")
    let index = (Math.floor(Math.random() * 22) + 2);
    let k = 0;
    while((k < 50) && usedImages.has(index)){
      index = (Math.floor(Math.random() * 22) + 2);
      k++;
    }
    usedImages.add(index);

    newImg.src = "./backImgs/r" + index + ".jpg";
    newImg.classList.add("backImg")
    newImg.style.opacity = 0;
    newImg.style.transform = "translate3d(0vw, 0vw, 0vw) scale(1.5)"

    let horizontal = 0;

    let i = 0;

    while((i < 50) && imageSpots.has(horizontal)){

      horizontal = Math.floor(Math.random() * 4);
      //console.log(imageSpots);
      i++;

    }
    imageSpots.add(horizontal)

    newImg.style.left = ((horizontal * 100 / 4) + (100 / 4 - 20)/2) + "vw"
    newImg.style.top = (10) + "vw"
    setTimeout(() => {
      newImg.style.opacity = 0.4;
      newImg.style.transform = "translate3d(0vw, 5vw, 0vw) scale(1.5)"
    }, 100)
    backImgs.appendChild(newImg);
    backgroundImages.push([newImg, horizontal, index]);
  }
}

function yosemiteParallax(event){

  for(var i = 0; i < yosemitePower.length; i++){

    let e = yosemiteLayers[i];

    let scrollAmount = window.scrollY;

    let power = yosemitePower[i]

    if(scrollAmount < 0) power = -1;

    if(e == undefined) return;

    e.style.transform = `translate3d(0, ${scrollAmount*power}px, 0)`;

  }
}

window.addEventListener("load", (event) => {

  yosemiteLayers = document.getElementsByClassName("yosemiteLayer")
  yosemiteParallax();

})
