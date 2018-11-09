// JS goes here
const navButtons = document.querySelector('.nav-buttons');
const hamburger = document.querySelector('#hamburger');
const hamburgerOpen = document.querySelector('#hamburger-open');
const hamburgerClose = document.querySelector('#hamburger-close');
const hideH1 = document.querySelector ('h1')

hamburger.addEventListener('click', function() {
  navButtons.classList.toggle('hidden');
  hamburgerOpen.classList.toggle('hidden');
  hamburgerClose.classList.toggle('hidden');
  hideH1.classList.toggle('hidden');
})


const buttons = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.content');

function buttonClick(event) {
  const dataBtn = event.target.dataset.tab;
  
  for(let i = 0; i < contents.length; i++) {
    const dataContent = contents[i].dataset.tab;
    
    if(dataBtn === dataContent) {
      contents[i].classList.remove('hidden');
    } else {
      contents[i].classList.add('hidden');
    }
  }
}

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonClick);
}