// JS goes here

const navImg = document.querySelector('nav img');
const navExpand = document.querySelector('.nav-expand');
const navClose = document.querySelector('.nav-expand img');

navImg.addEventListener('click', () => {
    navExpand.style.display = 'flex';
    navExpand.style.position = 'absolulte';
    navImg.style.display = 'none';
})

navClose.addEventListener('click', () => {
    navExpand.style.display = 'none';
    navImg.style.display = 'block';
})

console.log(navImg);