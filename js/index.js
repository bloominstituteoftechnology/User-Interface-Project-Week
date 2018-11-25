// // JS goes here

// get the nav icon
let hamburger = document.querySelector('.nav-hamburger');
// console.log(icon);

// get the exit image element
let exit = document.querySelector('.exit-button');

// add an event listener with a callback
hamburger.addEventListener('click', toggleNavShow);
exit.addEventListener('click', toggleNavShow)

// callback
function toggleNavShow() {
    // get overlay elements that will be on layer
    let overlay = document.querySelector('.overlay');
    let display = overlay.style.display;

    // when overlay pops up as a response of a click, then the exit 
    // button needs to respond to a click

    if (display === 'none') {
        // make overlay diplay as response of a click
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}   






