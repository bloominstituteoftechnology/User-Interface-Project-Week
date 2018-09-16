// JS goes here

const navItems=document.querySelector(".nav-items");
console.log(navItems);
const nav=document.querySelector("nav");
console.log(nav);

const  burger=document.querySelector(".burger");

const toggleNav=function(){
    navItems.classList.toggle("nav-items-on");
    nav.classList.toggle("nav--open");
    navItems.classList.toggle("nav-items");
    console.log(navItems);
}

burger.addEventListener('click', toggleNav);

