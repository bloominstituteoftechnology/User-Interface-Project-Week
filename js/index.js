// JS goes here
const hamburger = document.querySelector('.nav-img');
const navbar = document.querySelector('.hidden');
console.log(hamburger)
let open = false;

hamburger.addEventListener('click', () => open === false ? openNav() : closeNav());

const openNav = () => {
    navbar.style.display = 'block';
    hamburger.src = "img/nav-hamburger-close.png";
    open = true;
};

const closeNav = () => {
    navbar.style.display = 'none';
    hamburger.src = "img/nav-hamburger.png";
    open = false;
}