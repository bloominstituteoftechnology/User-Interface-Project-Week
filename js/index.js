const navigation = document.querySelector('.nav-open');
const navButton = document.querySelector('.nav-button');
const bigX = document.querySelector('.big-x');

navButton.addEventListener('click', function(){
    navigation.classList.toggle('display-hidden');
    navButton.classList.toggle('display-hidden');
    bigX.classList.toggle('display-hidden');
    console.log('navB');
});

bigX.addEventListener('click', function(){
    navigation.classList.toggle('display-hidden');
    navButton.classList.toggle('display-hidden');
    bigX.classList.toggle('display-hidden');

});