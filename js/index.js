let navBtn = document.querySelector('.nav-btn');
let nav = document.querySelector('.hamburger-content');
let navImg = document.querySelector('.nav-img');
let close = document.querySelector('.close-btn');
navBtn.addEventListener('click', () => {
  nav.classList.toggle('hidden');
  close.classList.toggle('hidden');
  navImg.classList.toggle('hidden');
});