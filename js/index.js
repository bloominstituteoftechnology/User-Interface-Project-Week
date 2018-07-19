
// Nav Bar //refactor..

const navHome = document.querySelector('.home');
const navServices = document.querySelector('.services');
const navContact = document.querySelector('.contact');
const infNav = document.querySelector('.infinityNav');
const infMenu = document.querySelector('.infinityMenu');
const hamburger = document.querySelector('.hamburger');
const logo = document.querySelector('.logo');
infMenu.style.display = "none";
navHome.style.display = "none";
navServices.style.display = "none";
navContact.style.display = "none";








      hamburger.addEventListener("click", function(element){
        if (this.src.length === 43){
            this.src="/img/nav-hamburger-close.png";
            infMenu.style.display = "flex";
          //   navItems.style.display = "flex";
            // infMenu.style.display = "block";
            navContact.style.display = "block";
            navServices.style.display = "block";
            navHome.style.display = "block";
      


      
      

//       // $(".services")
//       // $(".home").fadeIn(1000);
    }


        else if (this.src.length === 49){
        this.src="/img/nav-hamburger.png";
        infMenu.style.display = "none";
        // infMenu.style.display = "none";
        navHome.style.display = "none";
        navServices.style.display = "none";
        navContact.style.display = "none";
     }
    });
  
  






  //Service Tab Nav
 

  const pre = document.querySelector('.pre');
  const preContent = document.querySelector('.preContent');
  const con = document.querySelector('.con');
  const conContent = document.querySelector('.conContent');
  const des = document.querySelector('.des');
  const desContent = document.querySelector('.desContent');
  const sus = document.querySelector('.sus');
  const susContent = document.querySelector('.susContent');

  pre.style.color = "white";
  pre.style.backgroundColor = "#5E9FB9";
  preContent.style.display = "flex";
  con.style.color = "black";
  conContent.style.display = "none";
  des.style.color = "black";
  desContent.style.display = "none";
  sus.style.color = "black";
  susContent.style.display = "none";
 

  // $(document).ready(function() {
  //   $(".pre").click(function() {
        
  //   });
  // });


pre.addEventListener("click", function(element){
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
})









con.addEventListener("click", function(element){
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


    des.addEventListener("click", function(element){
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


    sus.addEventListener("click", function(element){
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


  // infMenu.style.display = "none";








  