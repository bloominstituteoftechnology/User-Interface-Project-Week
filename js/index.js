// JS goes here

const headerButton = document.querySelector('#header-button');

const dropMenu = document.querySelector('.drop-menu');

const buttonImg = document.querySelectorAll('.menu button img');
console.log(buttonImg);


onClick = () => {
    dropMenu.classList.toggle('inactive');
     buttonImg[0].classList.toggle('hidden');
     buttonImg[1].classList.toggle('hidden');
}



headerButton.addEventListener('click', onClick);



