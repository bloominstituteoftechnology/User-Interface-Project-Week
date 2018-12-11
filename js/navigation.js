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
            TweenMax.fromTo(this.navContent, .3, {
                opacity: 0
            }, {
                opacity: .9
            });
        } else {
            this.button.src = '../img/nav-hamburger.png';
            TweenMax.fromTo(this.navContent, .3, {
                opacity: .9
            }, {
                opacity: 0,
                onComplete: () => {
                    this.navContent.style.display = 'none';
                }
            });
        }
    }
    
}

let nav = new Navigation();