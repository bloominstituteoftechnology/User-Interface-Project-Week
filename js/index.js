//Main JS file

// Grab Navigation Parent
let nav = document.querySelector('.nav');

//Add a scroll event listener that adds a class if scroll.Y > 0
window.addEventListener('scroll',function(e){
  console.log(window.scrollY, 'y coord');
  if (window.scrollY > 0){
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
})


//Grab overlay and menu btn
let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".menu-btn img");

//Add a listener to toggle between the menu open and close state
menuBtn.addEventListener('click', function() {

  if (menuBtn.classList.contains('open')){
    overlay.style.display = "none";
    menuBtn.src= "./img/nav-hamburger.png"
    menuBtn.classList.remove('open')  

  }else {
    console.log('menu open')
    overlay.style.display = "block";
    menuBtn.src= "./img/nav-hamburger-close.png"
    menuBtn.classList.add('open')
  }

});