const openMenu = () => {
    menu.style.height = "100%";
}

const closeMenu = () => {
    menu.style.height = "0";
}

let slideIndex = 1;
showSlides(slideIndex);







const burger = document.querySelector('.ham');
const chi = document.querySelector('.closeHam')
const menu = document.querySelector('.menu-bar')
let controller = new ScrollMagic.Controller();
let scene1 = new ScrollMagic.Scene({
  triggerElement: ".main1"
})
.setClassToggle(".main1", "show")
.addTo(controller);
let scene2 = new ScrollMagic.Scene({
  triggerElement: ".main2"
})
.setClassToggle(".main2", "show")
.addTo(controller);
let scene3 = new ScrollMagic.Scene({
  triggerElement: ".main3"
})
.setClassToggle(".main3", "show")
.addTo(controller);
let scene4 = new ScrollMagic.Scene({
  triggerElement: ".main4"
})
.setClassToggle(".main4", "show")
.addTo(controller);
let scene5 = new ScrollMagic.Scene({
  triggerElement: ".main5"
})
.setClassToggle(".main5", "show")
.addTo(controller);
let scene6 = new ScrollMagic.Scene({
  triggerElement: ".main6"
})
.setClassToggle(".main6", "show")
.addTo(controller);
let scene7 = new ScrollMagic.Scene({
  triggerElement: ".main7"
})
.setClassToggle(".main7", "show")
.addTo(controller);




function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slidesIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display="block";
  slides[slideIndex-1].className += "active";
}

burger.addEventListener('click', openMenu);
chi.addEventListener('click', closeMenu);




