const toggleNav = () => {
  navContainer.classList.toggle('flex');
};

const navContainer = document.querySelector('.nav-container');

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleNav);