// All Pages

// Navigation

class NavLink {
    constructor (link) {
        this.link = link;
        this.link.addEventListener('click', toggleNav)

        this.link.addEventListener('mouseenter', () => this.select());  
        
        navLinks.addEventListener('mouseleave', () => this.deselect());  
    };
  
    select() {
        document.querySelectorAll('.nav-link').forEach( link => link.classList.remove('nav-link-selected'));
        this.link.classList.add('nav-link-selected');
    }
    deselect() {
        document.querySelectorAll('.nav-link').forEach( link => link.classList.remove('nav-link-selected'));
        document.querySelector('.nav-link-default').classList.add('nav-link-selected');
    }
}

const toggleNav = () => {
    navOpen.classList.toggle('nav-open-toggle');
    navClose.classList.toggle('nav-close-toggle');
    nav.classList.toggle('nav-toggle');
    TweenMax.from(nav, 1, {
        height: "0",
        width: "0",
        right: "0",
        top: "0"
    });
    TweenMax.to(nav, 1, {
        height: "100%",
        width: "100%",
        top: "0",
        position: "fixed"
    });
}
  
const navOpen = document.querySelector('.nav-open');
const navClose = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');

navOpen.addEventListener('click', toggleNav);
navClose.addEventListener('click', toggleNav);
navLink.forEach( navLink => new NavLink(navLink));

