const images = document.querySelectorAll("img");
const aboutContent = document.querySelectorAll("about-content");

images.forEach(pic => pic.addEventListener('mouseover', (e) => {
  e.target.style.visibility = 'hidden';

  setTimeout(function() {
    e.target.style.visibility = 'visible';

  }, 3000);
}));
