const toggleNav = () => {
    console.log('yay');
    nav.classList.toggle('menu-showing');
    if (nav.classList.contains('menu-showing')) {
        navButton.src = "./img/nav-hamburger-close.png";
        console.log(navButton.src);
        navContainer.style.paddingTop = '2.2%';
        navContainer.style.paddingBottom = '0';
    } else {
        navButton.src="./img/nav-hamburger.png";
        navContainer.style.paddingTop = '1.25%';
        navContainer.style.paddingBottom = '1.25%'; 
    }

}

const navButton = document.getElementById('nav-img');
console.log(navButton);
const nav = document.querySelector('.main-nav');
const navContainer = document.querySelector('.nav-container');
navButton.addEventListener('click', toggleNav);

