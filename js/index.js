// All Pages

// Navigation

class NavLink {
    constructor (link) {
        this.link = link;
        this.link.addEventListener('click', toggleNavClose)

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

const toggleNavOpen = () => {
    navOpen.classList.toggle('nav-open-toggle');
    navClose.classList.toggle('nav-close-toggle');
    TweenMax.from(nav, 2, {
        ease: Power2.easeOut,
        height: "0",
        width: "0",
        right: "0",
        top: "0",
        fontSize: "0",
        lineHeight: "0"
    });
    TweenMax.to(nav, 2, {
        ease: Power2.easeOut,
        height: "100%",
        width: "100%",
        top: "0",
        position: "fixed",
        fontSize: "48",
        lineHeight: "2",
    });
    nav.classList.toggle('nav-toggle');
}

const toggleNavClose = () => {
    navOpen.classList.toggle('nav-open-toggle');
    navClose.classList.toggle('nav-close-toggle');
    TweenMax.from(nav, 1, {
        ease: Power2.easeIn,
        height: "100%",
        width: "100%",
        top: "0",
        position: "fixed",
        fontSize: "48",
        lineHeight: "2"
    });
    TweenMax.to(nav, 1, {
        ease: Power2.easeIn,
        height: "0",
        width: "0",
        right: "0",
        top: "0", 
        fontSize: "0",
        lineHeight: "0",
        onComplete: () => nav.classList.toggle('nav-toggle')
    });
}
  
const navOpen = document.querySelector('.nav-open');
const navClose = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');

navOpen.addEventListener('click', toggleNavOpen);
navClose.addEventListener('click', toggleNavClose);
navLink.forEach( navLink => new NavLink(navLink));

