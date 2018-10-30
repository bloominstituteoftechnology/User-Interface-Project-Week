// JS goes here

//Navigation Button
const navButton = document.querySelector('.burger-button');
const menu = document.querySelector('.expanding-menu');
let buttonImgs = navButton.querySelectorAll('img');

navButton.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
    buttonImgs[0].classList.toggle('current-btn');
    buttonImgs[1].classList.toggle('current-btn');
});
//End of Nav Button
