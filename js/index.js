// JS goes here
let images = document.querySelectorAll('.section-img');
images = Array.from(images);
console.log(images);

function mobileImages(arr) {
    let mediaQuery = window.matchMedia( "(max-width: 600px)" );
    if (mediaQuery.matches) {
        arr[0].src = "img/home/home-mobile-villas-img.png"
        arr[1].src = "img/home/home-mobile-outskirts-img.png"
        arr[2].src = "img/home/home-mobile-the-blocks-img.png"
    }
}

mobileImages(images);