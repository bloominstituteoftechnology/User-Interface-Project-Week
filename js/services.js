
/////Menu //////////////
const navButtons = document.querySelector('.menu-links');
const hamburger = document.querySelector('#hamburger');
const hamburgerOpen = document.querySelector('#hamburger-open');
const hamburgerClose = document.querySelector('#hamburger-close');

 hamburger.addEventListener('click', function() {
  navButtons.classList.toggle('hidden');
  hamburgerOpen.classList.toggle('hidden');
  hamburgerClose.classList.toggle('hidden');
})

/////Tab component//////////////
const buttons = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.tab')
 function buttonClick(event) {
  const btnTab = event.target.dataset.tab;
   for(let i = 0; i < contents.length; i++) {
    const dataContent = contents[i].dataset.tab;
     if(btnTab === dataContent) {
      contents[i].classList.remove('hidden');
    } else {
      contents[i].classList.add('hidden');
    }
  }
}
 for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonClick);
}