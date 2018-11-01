let jumbo = document.querySelector('.jumbotron-img');
let firstAboutImg = document.querySelector('.about-top-right');
let secondAboutImg = document.querySelector('.about-bottom-left');
let villas = document.querySelector('.villa-img');
let outskirts = document.querySelector('.outskirts-img');
let blocks = document.querySelector('.blocks-img');

window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width: 600px)').matches) {
        jumbo.src = 'img/home/home-mobile-jumbotron.png';
        firstAboutImg.src = 'img/home/home-mobile-img-1.png';
        secondAboutImg.src = 'img/home/home-mobile-img-2.png';
        villas.src = 'img/home/home-mobile-villas-img.png';
        outskirts.src = 'img/home/home-mobile-outskirts-img.png';
        blocks.src = 'img/home/home-mobile-the-blocks-img.png';
    } else {
        jumbo.src = 'img/home/home-jumbotron.png';
        firstAboutImg.src = 'img/home/home-img-1.png';
        secondAboutImg.src = 'img/home/home-img-2.png';
        villas.src = 'img/home/home-villas-img.png';
        outskirts.src = 'img/home/home-outskirts-img.png';
        blocks.src = 'img/home/home-the-blocks-img.png';
    }
})