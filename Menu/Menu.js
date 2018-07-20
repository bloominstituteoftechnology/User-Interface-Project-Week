
 // "DOM button"
    // this.orangeBtn = this.item.querySelector(".custom-color").style.color = "orange";
    // console.log(this.orangeBtn);
  

// Start Here: Create a reference to the ".menu" class
//const menu;
 let menu = document.querySelector(".menu");
 menuState = document.getElementsByClassName("menu");
//let myButtons = document.querySelectorAll("li");
 let menuButton = document.querySelector(".menu-button");
 let menuClose = document.querySelector(".menu-button-close");

// menuButton.addEventListener('click', (event)=> {
//  menu.classList.toggle("menu--open")
// })} 


if (true){
    menuButton.addEventListener("click",function(){menu.classList.toggle("menu--close")});
}else {
    menuClose.addEventListener("click",function(){menu.classList.toggle("menu--open")});
}



//console.log(info)
console.log(menu)
console.log(menuButton)


// create a reference to the ".menu-button" class
//const menuButton;
// Using your menuButton reference, add a click handler that calls toggleMenu

//}

//menuButton = Array.from(menuButton).map( button => new Button(button));