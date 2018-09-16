


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Toggle the "menu--open" class on your menu reference.
const toggleMenu = function (event){
  menu.classList.toggle('menu--open')
}

// Using your menuButton reference, add a click handler that calls toggleMenu
// REFACTORS (both work) 
// Approach 1
    menuButton.addEventListener('click',toggleMenu);

// Approach 2
    // menuButton.addEventListener('click',function(event){
    //   menu.classList.toggle('menu--open')
    // });

// ADD BUTTONS TO MENU
{/* <button class="menu-button">Home</button>
<button class="menu-button">Services</button>
<button class="menu-button">Projects</button>
<button class="menu-button">About</button>
<button class="menu-button">Contact</button> */}
