// JS goes here

// const toggleMenu = () => {
//     menu.classList.toggle('shown')
// }


// const menu = ducument.querySelector('.navbox');
// const menuButton = document.querySelector('.menuOpen')

// menuButton.addEventListener('click', toggleMenu)

const navButtons = document.querySelector('.navbox');
console.log(navButtons);
const opener = document.querySelector('#openMenu');
console.log(opener);
const closer = document.querySelector('#closeMenu');
console.log(closer);


opener.addEventListener('click', function() {
    console.log('opener');
    navButtons.classList.toggle('menuClose');
    opener.classList.toggle('menuClose');
    closer.classList.toggle('menuClose');
});

closer.addEventListener('click', function() {
    console.log('closer');
    navButtons.classList.toggle('menuClose');
    opener.classList.toggle('menuClose');
    closer.classList.toggle('menuClose');
});








// function unhide(id) {
//     const selector = document.getElementsById('navbox')
//     if (selector.style.display === 'none') {
//         selector.style.display = 'block';
//     } else {
//         selector.style.display ='none';
//     }
// }