// JS goes here


//\\//\\//\\//\\//\\//\\//\\
//
// Navigation Modal
//
//\\//\\//\\//\\//\\//\\//\\

// listen to hamburger for click
const hamburger = document.querySelector('.hamburger');
const modal = document.querySelector('.modal');
modal.style.display = 'none';

let isOn = false;

hamburger.addEventListener('click', () => modalToggle());

function modalToggle() {
  // toggles display mode of modal div
  if (!isOn) {
    modal.style.display = 'block';
    isOn = true;
  }
  if (isOn) {
    modal.style.display = 'none';
    isOn = false;
  }
console.log(isOn);
};



