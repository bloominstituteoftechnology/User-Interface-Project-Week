// JS goes here
document.querySelector('.nav-btn').addEventListener('click', function(e){
  if(e.target.getAttribute("src")==="img/nav-hamburger-close.png"){
    document.querySelector('.menu-layover').style.display="none";
    e.target.setAttribute("src", "img/nav-hamburger.png");
  }else{
    e.target.setAttribute("src", "img/nav-hamburger-close.png");
    document.querySelector('.menu-layover').style.display = "flex";
  }
})
