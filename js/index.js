
// Nav Bar //refactor..

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
      $(".services").fadeIn(500);
      $(".home").fadeIn(1000);
    }


        else if (this.src.length === 49){
        this.src="/img/nav-hamburger.png";
        navHome.style.display = "none";
        navServices.style.display = "none";
        navContact.style.display = "none";
     }
    });
  });
  


  //Service Tab Nav
 

  let pre = document.querySelector('.pre');
  let preContent = document.querySelector('.preContent');
  let con = document.querySelector('.con');
  let conContent = document.querySelector('.conContent');
  let des = document.querySelector('.des');
  let desContent = document.querySelector('.desContent');
  let sus = document.querySelector('.sus');
  let susContent = document.querySelector('.susContent');

  con.style.color = "white";
  con.style.backgroundColor = "#5E9FB9";
  conContent.style.display = "none";
  pre.style.color = "black";
  preContent.style.display = "none";
  des.style.color = "black";
  desContent.style.display = "none";
  sus.style.color = "black";
  susContent.style.display = "none";
 

  $(document).ready(function() {
    $(".pre").click(function() {
        if (pre.style.color = "black"){
      pre.style.color = "white";
      pre.style.backgroundColor = "#5E9FB9";
      con.style.color = "black";
      con.style.backgroundColor = "white"; 
      des.style.color = "black";
      des.style.backgroundColor = "white"; 
      sus.style.color = "black";
      sus.style.backgroundColor = "white"; 
      conContent.style.display = "none";
      desContent.style.display = "none";
      susContent.style.display = "none";
      preContent.style.display = "flex";
     }
    });
  });






  $(document).ready(function() {
    $(".con").click(function() {
        if (con.style.color = "black"){
      con.style.color = "white";
      con.style.backgroundColor = "#5E9FB9";
      pre.style.color = "black";
      pre.style.backgroundColor = "white"; 
      des.style.color = "black";
      des.style.backgroundColor = "white"; 
      sus.style.color = "black";
      sus.style.backgroundColor = "white"; 
      conContent.style.display = "flex";
      desContent.style.display = "none";
      susContent.style.display = "none";
      preContent.style.display = "none";
     }
    });
  });

  $(document).ready(function() {
    $(".des").click(function() {
        if (des.style.color = "black"){
      des.style.color = "white";
      des.style.backgroundColor = "#5E9FB9";
      pre.style.color = "black";
      pre.style.backgroundColor = "white"; 
      con.style.color = "black";
      con.style.backgroundColor = "white"; 
      sus.style.color = "black";
      sus.style.backgroundColor = "white";
      conContent.style.display = "none";
      desContent.style.display = "flex";
      susContent.style.display = "none";
      preContent.style.display = "none"; 
     }
    });
  });

  $(document).ready(function() {
    $(".sus").click(function() {
        if (sus.style.color = "black"){
      sus.style.color = "white";
      sus.style.backgroundColor = "#5E9FB9";
      pre.style.color = "black";
      pre.style.backgroundColor = "white"; 
      con.style.color = "black";
      con.style.backgroundColor = "white"; 
      des.style.color = "black";
      des.style.backgroundColor = "white";
      conContent.style.display = "none";
      desContent.style.display = "none";
      susContent.style.display = "flex";
      preContent.style.display = "none"; 
     }
    });
  });










  