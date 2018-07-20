//Navigation
let image_tracker="open";
function Navi(){
  let Navi=document.querySelectorAll(".navi")
  for (var i = 0; i < Navi.length; i++) {
    Navi[i].classList.toggle('Navigation');
  }


  }

  var customMenu = document.querySelector("#menu-button");

  customMenu.src='img/nav-hamburger.png'
  customMenu.addEventListener('click',(event) => {
    Navi();
menu();

//let textd=document.querySelector(".inImg");
// textd.classList.toggle("outimg");


  if (image_tracker=='open') {
    event.target.src='img/nav-hamburger-close.png';
    image_tracker='closed';
  }
  else if (image_tracker==='closed') {
    event.target.src='img/nav-hamburger.png'
    image_tracker='open';
  }

  });




function menu(){
let menuOpen = document.querySelector('.menu-closed');
menuOpen.classList.toggle('custom-col')
}


//animations
function shake(){
TweenMax.fromTo('.customButton',0.15, {x:-20},{x:20,repeat:5,yoyo:true,ease:Sine.easeInOut,onComplete:function(){TweenMax.to(this.target,1.5,{x:0,ease:Elastic.easeOut})}})}
let button = document.querySelectorAll('.customButton');
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click",()=>{
    shake();
  });
};
