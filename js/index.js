// JS goes here


//\\//\\//\\//\\//\\//\\//\\
//
// Navigation Modal
//
//\\//\\//\\//\\//\\//\\//\\

// listen to hamburger for click
const hamburger = document.querySelector('.hamburger');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-button');


modal.style.display = 'none';
closeBtn.style.display = 'none';

hamburger.addEventListener('click', () => modalToggleOpen());
closeBtn.addEventListener('click', () => modalToggleClosed());

function modalToggleOpen() {
  modal.style.display = 'block';
  hamburger.style.display = 'none';
  closeBtn.style.display = 'block';
};

function modalToggleClosed() {
  modal.style.display = 'none';
  hamburger.style.display = 'block';
  closeBtn.style.display = 'none';
}



