// JS goes here
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// navbar dropdown
window.onclick = () => {menuSwitch()}
let navlist = document.querySelectorAll('.dropdown-link');
let open = document.querySelector('.open');
let close = document.querySelector('.close');
function menuSwitch () {
  
}
// <!-- <div class="dropdown">
// <button onclick="myFunction()" class="dropbtn">Dropdown</button>
//   <div id="myDropdown" class="dropdown-content">
//   <a href="#home">Home</a>
//   <a href="#about">About</a>
//   <a href="#contact">Contact</a>
//   </div>
// </div> -->