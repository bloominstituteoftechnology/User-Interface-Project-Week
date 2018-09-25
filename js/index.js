// class Button {
//     constructor(domElement) {
//         this.domElement = domElement;
//         this.expanded = document.querySelector('.nav');
//         this.domElement.addEventListener('click', () => {
//             this.expandNav();
//         });
//     }
//         expandNav() {
//             this.expanded.classList.toggle('expanded');
//             console.log('works');
//         }
//     }

// let navButton = document.querySelectorAll('.nav-button');
// navButton = Array.from(navButton).map(domElement => new Button(domElement));

const toggleNav = element => {
    nav.classList.toggle('expanded');
}

const nav = document.querySelector('.nav');
const navButton = document.querySelector('.nav-button');
navButton.addEventListener('click', () => {toggleNav();
});