// JS goes here

const ham = document.querySelector('.ham');
const exit = document.querySelector('.exit');
const nav = document.querySelector('nav');

ham.addEventListener('click', () => {
  nav.classList.toggle('nav-hidden');
  nav.classList.toggle('nav-expanded');
  ham.classList.toggle('ham');
  ham.classList.toggle('exit');
  exit.classList.toggle('ham');
  exit.classList.toggle('exit');
})

exit.addEventListener('click', () => {
  nav.classList.toggle('nav-hidden');
  nav.classList.toggle('nav-expanded');
  ham.classList.toggle('ham');
  ham.classList.toggle('exit');
  exit.classList.toggle('ham');
  exit.classList.toggle('exit');
})