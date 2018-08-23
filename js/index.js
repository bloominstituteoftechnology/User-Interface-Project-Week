//funtionality for nav open/close
const open = () => {
    menu.classList.add('menu--open'); 
  }
const menuClose = ( ) => {
    menu.classList.remove('menu--open');
}

  
const close = document.querySelector('.close');  
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
  
menuButton.addEventListener('click', open);
close.addEventListener('click', menuClose);
//open/close end

const show = () => {
  btn1.classList.add('none');
  btn2.classList.remove('none');
}
const hide = () => {
  btn2.classList.add('none');
  btn1.classList.remove('none');
}

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn1.addEventListener('click', show);
btn2.addEventListener('click', hide);