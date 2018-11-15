// JS goes here

// When the navigation button is clicked, the links are shown, taking the whole page view
const navBtn = document.querySelector('#navBtn');
const links  = document.querySelector('.linksArea');
navBtn.addEventListener('click', () => {
  links.classList.toggle('linksShow');
  navBtn.classList.toggle('openBtn');
  navBtn.classList.toggle('closeBtn');
})