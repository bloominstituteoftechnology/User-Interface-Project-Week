// JS goes here




const full = document.querySelector('.fullmenu')
const menubutton = document.querySelector('.menubtn');
const menuclose =  document.querySelector('.menucontent');
const menuclosebtn = document.querySelector('.menu-close');


full.addEventListener('click', function(){
    menubutton.classList.toggle('menu-toggle');
    menuclose.classList.toggle('menu-toggle');
    console.log('click is working');
 
});

menuclosebtn.addEventListener('click', function() {
    display = none;
});
