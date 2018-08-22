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
  
  const btn = document.querySelector('.btn');
  const none = () => {
    btn.classList.toggle('none');
  }
  btn.addEventListener('click', none);