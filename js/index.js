const menuButton = document.querySelector('.open-hamburger'); 
const menuOpenContent = document.querySelector('.menu-content'); 
const closeMenuButton = document.querySelector('.closed-hamburger'); 

menuButton.addEventListener('click', function(){
    menuOpenContent.classList.remove('menu-hidden'); 
    menuButton.style.display = 'none'; 
    closeMenuButton.style.display = "flex"; 
})

closeMenuButton.addEventListener('click', function(){
    menuOpenContent.classList.add('menu-hidden'); 
    menuButton.style.display = "flex"; 
    closeMenuButton.style.display = "none";
})







