// Navigation
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('header.header');
let open = hamburger.addEventListener('click', () => {

    



    if (header.classList.contains('navigation-show')) {
        hamburger.classList.remove("is-active");
    // hamburger.src='img/nav-hamburger.png';
    // hamburger.alt='Open Menu';

    } else {
        hamburger.classList.add("is-active");
        navigation.classList.add('navigation-show');
        header.classList.add('navigation-show');
    

    
    // hamburger.src='img/nav-hamburger-close.png';
    // hamburger.alt='Close Menu';
    }
});