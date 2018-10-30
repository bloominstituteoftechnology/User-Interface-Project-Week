// JS goes here

//Expanded nav bar
const navExpanded = document.querySelector('#nav');
const hamburger = document.querySelector('#hamburger');
const headerWrapper = document.querySelector('.header-wrapper');
const navCloseBtn =  document.querySelector('#nav-close');

hamburger.addEventListener('click', function() {
    headerWrapper.classList.add('nav-hidden');
    navExpanded.classList.add('nav-open');
});

navCloseBtn.addEventListener('click', function(){
    navExpanded.classList.remove('nav-open');
    headerWrapper.classList.remove('nav-hidden');
})
