// JS goes here
const ham = document.querySelector('.ham');
const close = document.querySelector('.close-btn');
const navigation = document.querySelector('.nav-bar');
const links = document.querySelector('.navigation')
console.log(close)
ham.addEventListener('click', ()=>{
    navigation.style.height = '100%';
    close.style.display='block';
    ham.style.display='none';
    links.style.display = 'block'
})
close.addEventListener('click', () => {
    navigation.style.height = '';
    close.style.display = '';
    ham.style.display = '';
    links.style.display = ''
})