// Home Page

// Navigation

class NavLink {
    constructor (link) {
        this.link = link;
        this.link.addEventListener('click', toggleNav)
    }
}

const toggleNav = () => {
    navOpen.classList.toggle('nav-open-toggle');
    navClose.classList.toggle('nav-close-toggle');
    nav.classList.toggle('nav-toggle');
}
  
const navOpen = document.querySelector('.nav-open');
const navClose = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav-link');

navOpen.addEventListener('click', toggleNav);
navClose.addEventListener('click', toggleNav);
navLink.forEach( navLink => new NavLink(navLink));

