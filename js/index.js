// class Dropdown {
//   constructor(element) {
//     this.element = element;
//     this.button = dropdownbtn;
//     this.content = dropdownContent;
//     this.button.addEventListener("click", () => {
//       this.toggleContent();
//     })
//   }
//
//   toggleContent() {
//     alert("yay!");
//     //this.content.classList.toggle("dropdown-hidden");
//   }
// }
// let dropdownContent = document.querySelector('.dropdown-content')
// let dropdownbtn = document.querySelector('.dropdown-button')
// let dropdowns = document.querySelectorAll('.dropdown');
// dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

//
let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".dropdown-button");
let closeBtn = document.querySelector(".close-btn");

console.log(menuBtn)

menuBtn.addEventListener('click', function() {
  // I want overlay to display block now
  overlay.style.display = "block";
});

closeBtn.addEventListener('click', function() {
  // I want overlay to display none now
  overlay.style.display = "none";
});
