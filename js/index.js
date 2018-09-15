// JS goes here
menuButton = document.querySelector('#nav-bar-closed');
menuPage = document.querySelector('.nav-bar-open');
closeButton = document.querySelector('#close-button')
menuButton.addEventListener('click', function(){
    menuButton.style.display = 'none'
    closeButton.style.display = 'flex'
    menuPage.style.display = 'flex'
});
closeButton.addEventListener('click', function(){
    closeButton.style.display = ''
    menuButton.style.display = ''
    menuPage.style.display = ''
});