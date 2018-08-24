// JS goes here

const parentContainer = document.querySelector('.home');
const logoHeading = document.querySelector('.logo-heading');
const hamburger = document.querySelector('.menu');
const mainNav = document.querySelector('.nav')

hamburger.addEventListener('click', () => {
    console.log.apply("nested click occured!");
});

mainHeading.addEventListener('click', (event) => {

console.log(event.currentTarget.parentNode);

firstHeading.classList.toggle('hide-this');
});