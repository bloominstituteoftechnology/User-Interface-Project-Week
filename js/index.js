// GLOBAL FUNCTIONALITY

//(in-progress) navigation overlays screeen when icon is clicked
let overlay = document.querySelector('.overlay');
let menuBtn = document.querySelector('.hamburger-dropdown');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
});

// class NavDropdown {
//     constructor(navLink) {
//         this.navLink = navLink;
//         this.button = this.navLink.querySelector('.hamburger-dropdown-list');
//         this.links = this.navLink.querySelector('.dropdown-link');
//         this.button.addEventListener('click', () => {this.toggleContent() });
//     }
//     toggleContent() {
//         this.links.classList.toggle('hidden-list');
//     }
// }




// let navDropdownItems = document.querySelectorAll('.hamburger-dropdown'); //why is querySelectorAll used instead of just querySelector?? (only one instance of the selector in the HTML)
// navDropdownItems = Array.from(navDropdownItems).map( item => new NavDropdown(item));

// (in-progress) turns scrollbar to opaque grey when user scrolls page 
let navBar = document.querySelector('.navigation');
window.addEventListener('scroll', () => {
    navBar.setAttribute('style', 'background-color: #9DA7B1; opacity: .95' )
});




// SERVICES PAGE


// (in-progress)use buttons to switch between tab content
class serviceButtons {
    constructor(service) {
        this.tab = service;
        this.button = this.service.querySelectorAll('.tab-button');

    }
}

let tabs = document.querySelectorAll('.tab-button')
// map over every tab and create a new tabs component