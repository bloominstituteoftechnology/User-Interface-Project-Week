let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.close-btn');
let menuBtn = document.querySelector('.hambutton');

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

menuBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
});
