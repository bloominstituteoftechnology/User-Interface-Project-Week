
// When the navigation button is clicked, the links are shown.
const navBtn = document.querySelector('.navBtn');
const links  = document.querySelector('.linksArea');
navBtn.addEventListener('click', () => {
  //Show or hide the links
  links.classList.toggle('linksShow');
  
  // Change the button (either open or close)
  navBtn.classList.toggle('openBtn');
  navBtn.classList.toggle('closeBtn');
})

