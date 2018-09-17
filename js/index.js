// navigation
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('header.header');
let open = hamburger.addEventListener('click', () => {

    if (header.classList.contains('navigation-show')) {
        hamburger.classList.remove('is-active');
        TweenMax.to(header, .4, {
            height: '50px', ease: Power2.easeIn, onComplete: () => {
                header.classList.remove('navigation-show');
                navigation.classList.remove('navigation-show');
            }
        });

        TweenMax.fromTo(navigation, .3, { opacity: '1' }, { opacity: '0', ease: Power2.easeIn });

    }
    else {
        hamburger.classList.add('is-active');
        navigation.classList.add('navigation-show');
        header.classList.add('navigation-show');
        TweenMax.to(header, .4, {
            height: '100%', ease: Power3.easeOut, onComplete: () => {
            }
        });

        TweenMax.fromTo(navigation, .3, { opacity: '0' }, { opacity: '1', ease: Power3.easeOut });
    }
});

// scroll anime
class GrayScaleAnime {
    constructor(element, delay, name = 'default') {
        this.element = element;
        this.delay = delay;
        this.name = name;
        this.element.classList.add('grayscale');
        window.addEventListener('scroll', () => this.isVisible());
    }

    isVisible() {

        let position = this.element.getBoundingClientRect();
        console.log(this.name + ": " + position.bottom);
        console.log(window.scrollY);
        if (position.bottom >= this.delay) {
            this.element.classList.add('grayscale');
        } else {
            this.element.classList.remove('grayscale');
        }
    }
}

let images = document.querySelectorAll('img');
let banners = document.querySelectorAll('.project-banner');

let banner1 = banners[0];
let banner2 = banners[1];
let banner3 = banners[2];

images = Array.from(images).map(element => new GrayScaleAnime(element, 950));

images = Array.from(banners).map(element => new GrayScaleAnime(element, 950));
