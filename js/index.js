// Navigation JS
let dropdown = document.querySelector(".dropdown-button");
dropdown.addEventListener('click', function() {
    // change the hamburger to an X
    dropdown.src = "./img/nav-hamburger-close.png";
    
    // toggle the class to hide the nav menu
    let content = document.querySelector(".dropdown-content");
    content.classList.toggle('dropdown-hidden');

    // toggle the X back to hamburger
    if (content.classList.contains('dropdown-hidden') === true) {
        dropdown.src = "./img/nav-hamburger.png";
    }
});

// replacing images on mobile
window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let bkgd = document.querySelector('.hero');
    let blueprint = document.querySelector('#image1');
    let reflection = document.querySelector('#image2');
    let villas = document.querySelector('#Villas');
    let outskirts = document.querySelector('#Outskirts');
    let blocks = document.querySelector('#Blocks');

    if (width <= 500) {
        bkgd.style.backgroundImage = "url('../img/home/home-mobile-jumbotron.png')";
        blueprint.src = "./img/home/home-mobile-img-1.png";
        reflection.src = "./img/home/home-mobile-img-2.png";
        villas.src = "./img/home/home-mobile-villas-img.png";
        outskirts.src = "./img/home/home-mobile-outskirts-img.png";
        blocks.src = "./img/home/home-mobile-the-blocks-img.png";
    }
    else if (width > 500) {
        bkgd.style.backgroundImage = "url('../img/home/home-jumbotron.png')";
        blueprint.src = "./img/home/home-img-1.png";
        reflection.src = "./img/home/home-img-2.png";
        villas.src = "./img/home/home-villas-img.png";
        outskirts.src = "./img/home/home-outskirts-img.png";
        blocks.src = "./img/home/home-the-blocks-img.png";
    }
})