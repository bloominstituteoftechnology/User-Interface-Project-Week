// GLOBAL FUNCTIONALITY

//(in-progress) navigation overlays screeen when icon is clicked


// (in-progress) turns scrollbar to opaque grey when user scrolls page 
let navBar = () => document.querySelector('.navigation');
window.addEventListener('scroll', () => {
    navBar.setAttribute('style', 'background-color: #9DA7B1; opacity: .95' )
});






// SERVICES PAGE

// class serviceButtons {
//     constructor(service) {
//         this.tab = service;
//         this.button = this.service.querySelectorAll('.tab-button');

//     }
// }

// let tabs = document.querySelectorAll('.tab-button')