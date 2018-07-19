
 // "DOM button"
    // this.orangeBtn = this.item.querySelector(".custom-color").style.color = "orange";
    // console.log(this.orangeBtn);
  

// Start Here: Create a reference to the ".menu" class
//const menu;
let menu = document.querySelector(".menu");
//let myButtons = document.querySelectorAll("li");
let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', (event)=> {
 menu.classList.toggle("menu--open")
})
// menuButton.addEventListener('click',openNav);

//console.log(info)
console.log(menu)
console.log(menuButton)
// function openNav() {
//   document.getElementsByClassName("myNav").style.height = "100%";
// }

// function closeNav() {
//   document.getElementById("myNav").style.height = "0%";
// }


// create a reference to the ".menu-button" class
//const menuButton;
// Using your menuButton reference, add a click handler that calls toggleMenu

//}

//menuButton = Array.from(menuButton).map( button => new Button(button));