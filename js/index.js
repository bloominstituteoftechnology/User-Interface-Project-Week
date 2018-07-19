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

//tab Navigator
let allimg=document.querySelector('.tabButtonsImgs').children;
let heading=document.querySelector('#headingtab');
//PreConstructionButton
let PreConstructionButton=document.querySelector('.Pre-ConstructionButton')
PreConstructionButton.addEventListener('click',()=>{
for (var i = 0; i < allimg.length; i++) {
  allimg[i].classList.remove("tab-active");
}
heading.innerHTML="Pre-Construction";
allimg[0].classList.add("tab-active");

});

//ConstructionButton
let ConstructionButton=document.querySelector('.ConstructionButton')
ConstructionButton.addEventListener('click',()=>{
for (var i = 0; i < allimg.length; i++) {
  allimg[i].classList.remove("tab-active");
}
heading.innerHTML="Construction";
allimg[1].classList.add("tab-active");

});
//DesignBuildButton
let DesignBuildButton=document.querySelector('.DesignBuildButton')
DesignBuildButton.addEventListener('click',()=>{
for (var i = 0; i < allimg.length; i++) {
  allimg[i].classList.remove("tab-active");
}
heading.innerHTML="Design Build";
allimg[2].classList.add("tab-active");

});
//SustainabilityButton
let SustainabilityButton=document.querySelector('.SustainabilityButton')
SustainabilityButton.addEventListener('click',()=>{
for (var i = 0; i < allimg.length; i++) {
  allimg[i].classList.remove("tab-active");
}
heading.innerHTML="Sustainability";
allimg[3].classList.add("tab-active");

});
