// // JS goes here

const toggleMenu = () => {
  dropdown.classList.toggle('dropdown-open');
}

const dropdown = document.querySelector('.dropdown-content');
const button = document.querySelector('.dropdown-button');

button.addEventListener('click', () => {
  return toggleMenu(dropdown);
});


let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));


// document.getElementById('hamopen').addEventListener('click', () => {
//   document.getElementById('hamopen').src = 'img/nav-hamburger-close.png';
// })

function toggleImg() {
  let initialImg = document.getElementById('hamopen').src;
  let srcTest = initialImg.includes('img/nav-hamburger.png');
  let newImg = {
    'true' : 'img/nav-hamburger-close.png',
    'false': 'img/nav-hamburger.png'}[srcTest];

    return newImg
}

button.addEventListener('click', function() {
  document.getElementById('hamopen').src = toggleImg();
})