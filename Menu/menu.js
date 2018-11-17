


console.log("In Menu");
const menu = document.querySelector(".menu");//Create a reference to the ".menu" class
const menuButtonO=document.querySelector(".menu-buttonO");//create a reference to the
// ".menu-button" class
const toggleMenu = () => {
    console.log("Menu clicked...")
    menu.classList.toggle("menu--open");
    menuButtonO.classList.toggle("menu--open");
    menuButtonC.classList.toggle("menu--open");



}
menuButtonO.addEventListener("click",toggleMenu);
//Using your menuButton reference, add a click handler that calls toggleMenu

const menuButtonC=document.querySelector(".menu-buttonC");
menuButtonC.addEventListener("click",toggleMenu);