// Navigation
// DOM References
const navOpen = document.querySelector('#nav-open');

const navClose = document.querySelector('#nav-close');

const nav = document.querySelector('nav');



// Callback Methods
const showMenu = () => {
    TweenMax.to(navOpen, .5, {
        rotation: 180
    });
    nav.style.height = '100vh';
    nav.classList.remove('hide-nav');
    TweenMax.from(nav, 1, {
        height: 0
    });
    setTimeout(() => {
        navOpen.classList.add('hide-nav');
        navClose.classList.remove('hide-nav');
        navClose.style.cursor = 'pointer';

    }, 500);

}

const hideMenu = () => {
    navClose.classList.add('hide-nav');
    navOpen.classList.remove('hide-nav');
    TweenMax.to(navOpen, .5, {
        rotation: 360
    });

    TweenMax.to('nav', 1, {
        height: 0
    });

    setTimeout(() => {
        nav.classList.add('hide-nav');

    }, 500);


}


// Event Listeners
navOpen.addEventListener('click', showMenu);

navClose.addEventListener('click', hideMenu);