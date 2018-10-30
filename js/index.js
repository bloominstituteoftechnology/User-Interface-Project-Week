// JS goes here

// toggling nav classes
const toggleNav= () => {
    navigation.classList.toggle ('navigation-active');
    dropdown.classList.toggle ('nav-active');
}

let navigation = document.querySelector('.navigation');
let dropdown = document.querySelector('.nav-dropdown');
let ham = document.querySelector('.nav-ham');
let close = document.querySelector('.nav-close')
console.log(navigation)
console.log(dropdown)
ham.addEventListener('click',toggleNav);
close.addEventListener('click', toggleNav);
