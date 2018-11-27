// JS goes here

// const toggleMenu = () => {
//     menu.classList.toggle('shown')
// }


// const menu = ducument.querySelector('.navbox');
// const menuButton = document.querySelector('.menuOpen')

// menuButton.addEventListener('click', toggleMenu)

const navButtons = document.querySelector('.navbox');
const threeLines = document.querySelector('#threeLines');
const opener = document.querySelector('#menuOpen');
const closer = document.querySelector('#menuClose');

threeLines.addEventListener('click', function() {
    navButtons.classList.toggle('hidden');
    opener.classList.toggle('hidden');
    closer.classList.toggle('hidden');
})









// function unhide(id) {
//     const selector = document.getElementsById('navbox')
//     if (selector.style.display === 'none') {
//         selector.style.display = 'block';
//     } else {
//         selector.style.display ='none';
//     }
// }