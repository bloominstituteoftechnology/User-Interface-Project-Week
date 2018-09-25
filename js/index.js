// JS goes here

//Navigation for home-page

let burgerBtn = document.querySelector('.burger');
let myHomepage = document.querySelector('.container');
let copyRight = document.querySelector('.copyright');
let openNav = document.querySelector('.open-nav');
let closeBtn = document.querySelector('.opened-nav');
burgerBtn.addEventListener('click', ()=> {
    myHomepage.style.display = "none";
    copyRight.style.display = "none";
    openNav.style.display = "block";
} )

closeBtn.addEventListener('click', ()=> {
    myHomepage.style.display = "block";
    copyRight.style.display = "block";
    openNav.style.display = "none";
})
