//menu elements


//toggles the menu-open and sets the old nav opacity to zero
const toggleMenuOn = element => {
    newMenu.classList.toggle('menu-open');

    oldMenu.style.opacity = '0';
};

//toggles menu-open and sets the old menu opacity back to 1
const toggleMenuOff = element => {
    oldMenu.style.opacity = '1';
    newMenu.classList.toggle('menu-open');
};

// create reference to the new menu and the old menu classes
const newMenu = document.querySelector('.new-menu');
const oldMenu = document.querySelector('.oldmenu');

// create a reference to the .hamburger class
const hamburger = document.querySelector('.hamburger');

//adds event listener to the hamburger picture
hamburger.addEventListener('click', toggleMenuOn);

//toggles close the toggle Menu Class with the "X"
const menuClose = document.querySelector('.menuclose');
menuClose.addEventListener('click', toggleMenuOff);

//animations


window.sr = ScrollReveal({
    reset: false
});

sr.reveal('.recentprojects', {
    origin: 'right',
    distance: '60px',
    duration: 2000,
    interval: 1000
});

sr.reveal('.twoboxes', {
    origin: 'left',
    duration: 2000,
    delay: 500,
    interval: 600

});

sr.reveal('.footer', {
    duration: 3000,
});