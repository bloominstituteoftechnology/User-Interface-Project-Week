
let menuItems= document.querySelector('.menu-items');
let status= "closed"
document.querySelector("#hamButton").addEventListener('click',()=>
{
;
  menuItems.classList.toggle( "menu-items_revealed");
  if(status==="open") {
    status="closed";
    event.target.src='img/nav-hamburger.png';
  }
  else if(status==="closed") {
    status="open";
    event.target.src='img/nav-hamburger-close.png';
  }


}) ;
