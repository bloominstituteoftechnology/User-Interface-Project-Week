
const showNav = () => {
    // Toggle the "menu--open" class on your menu refence. 
    menu.classList.toggle("menu--open");
  }





const menu = document.querySelector(".menu");


const hamButton= document.querySelectorAll(".nav-button");
for(let i =0; i < hamButton.length; i++) {
      hamButton[i].addEventListener("click", showNav);

}

