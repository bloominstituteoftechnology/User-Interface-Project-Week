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