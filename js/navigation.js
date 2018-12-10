class Navigation {
    constructor() {
        this.button = document.querySelector('.nav-open');
        this.navContent = document.querySelector('.nav-content');
        this.navContent.style.display = 'none';
        this.button.addEventListener('click', () => this.toggleNav());
    }

    toggleNav() {
        console.log(this.navContent.style.display)
        if(this.navContent.style.display == 'none') {
            this.navContent.style.display = 'flex';
            this.button.src = '../img/nav-hamburger-close.png';
        } else {
            this.navContent.style.display = 'none';
            this.button.src = '../img/nav-hamburger.png';
        }
    }
    
}

let nav = new Navigation();