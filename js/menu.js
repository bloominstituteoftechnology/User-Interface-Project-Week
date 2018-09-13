const toggleMenu = (e) => {
    menu.classList.toggle('dropdown-hidden')
}

let menu = document.querySelector('.dropdown-content');
let menuBtn = document.querySelector('.hamburger-btn');

menuBtn.addEventListener('click', toggleMenu);