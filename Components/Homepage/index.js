const topImages = document.querySelectorAll('.top-section-img img');
const villas = document.querySelector('#villas img');
const outskirts = document.querySelector('#outskirts img');
const blocks = document.querySelector('#blocks img');
const fadeHTML = function() {
    let elements;
    let windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
        scrollHandlers();
        checkPosition();
    }

    function scrollHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    }

    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            let positionTop = elements[i].getBoundingClientRect().top;
            if (positionTop - windowHeight <= 0) {
                elements[i].className = elements[i].className.replace('hidden', 'fade-in');
            }
        }
    }
    return {
        init: init
    }
}

function checkWidth() {
    if (window.innerWidth > 450) {
        topImages[0].setAttribute('src', 'img/home/home-img-1.png');
        topImages[1].setAttribute('src', 'img/home/home-img-2.png');
        villas.setAttribute('src', 'img/home/home-villas-img.png');
        outskirts.setAttribute('src', 'img/home/home-outskirts-img.png');
        blocks.setAttribute('src', 'img/home/home-the-blocks-img.png');
    } else if (window.innerWidth <= 450) {
        topImages[0].setAttribute('src', 'img/home/home-mobile-img-1.png');
        topImages[1].setAttribute('src', 'img/home/home-mobile-img-2.png');
        villas.setAttribute('src', 'img/home/home-mobile-villas-img.png');
        outskirts.setAttribute('src', 'img/home/home-mobile-outskirts-img.png');
        blocks.setAttribute('src', 'img/home/home-mobile-the-blocks-img.png');
    }
}

window.addEventListener('resize', checkWidth);

checkWidth();
fadeHTML().init();