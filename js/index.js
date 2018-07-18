
// Nav Bar //refactor..
let navItems = document.querySelector('.navItems');

let navHome = document.querySelector('.home');
let navServices = document.querySelector('.services');
let navContact = document.querySelector('.contact');
navHome.style.display = "none";
navServices.style.display = "none";
navContact.style.display = "none";


$(document).ready(function() {
    $(".hamburger").click(function() {
        if (this.src.length === 43){
      this.src="/img/nav-hamburger-close.png";
    //   navItems.style.display = "flex";
      $(".contact").fadeIn();
      $(".services").fadeIn(1000);
      $(".home").fadeIn(2000);
    }


        else if (this.src.length === 49){
        this.src="/img/nav-hamburger.png";
        navHome.style.display = "none";
        navServices.style.display = "none";
        navContact.style.display = "none";
     }
    });
  });
  