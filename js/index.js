// JS goes here

const headerButton = document.querySelector('#header-button');

const dropMenu = document.querySelector('.drop-menu');


onClick = () => {
    dropMenu.classList.toggle('inactive')
}


headerButton.addEventListener('click', onClick);

