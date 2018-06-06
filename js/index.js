//Main JS file

let nav = document.querySelector('.nav');
console.log(nav);

//
window.addEventListener('scroll',function(e){
  console.log(window.scrollY, 'y coord');
  if (window.scrollY > 0){
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
})


let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".menu-btn img");
let closeBtn = document.querySelector(".close-btn");

console.log(menuBtn)

menuBtn.addEventListener('click', function() {
  // I want overlay to display block now

  if (menuBtn.classList.contains('open')){
    overlay.style.display = "none";
    menuBtn.src="../img/nav-hamburger.png"
    menuBtn.classList.remove('open')  
  }else {
    overlay.style.display = "block";
    menuBtn.src="../img/nav-hamburger-close.png"
    menuBtn.classList.add('open')
  }
});