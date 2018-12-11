const navigation = document.querySelector('.nav-open');
const navButton = document.querySelector('.nav-button');
navButton.addEventListener('click', function(){
    navigation.classList.toggle('display-hidden');
})