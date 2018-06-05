// JS goes here
let nav = document.querySelector('.navigation');

document.addEventListener('scroll', () => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        nav.setAttribute('style', 'background: gray; opacity: 0.95');
    } else {
        nav.removeAttribute('style', 'background');
    }
});