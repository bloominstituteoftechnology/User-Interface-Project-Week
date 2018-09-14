// JS goes here

function interface() {
  let menuOpen = true;

  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", clickMenu);
  let menu = document.querySelector(".nav");
  const formInput = document.querySelector(".input");
  formInput.addEventListener("click", inputFocus);
  

  function clickMenu() {
    if (menuOpen === true) {
      menuButton.classList.add("menu-button-close");
      menu.classList.remove("nav-close");
      menu.classList.add("nav-open");
      menuOpen = false;
    } else {
      menuButton.classList.remove("menu-button-close");
      menu.classList.remove("nav-open");
      menu.classList.add("nav-close");
      menuOpen = true;
    }
  }


  function inputFocus() {
    // clears the input for the user to type their email
    if (formInput.value === "Enter Email:") {
      formInput.value = "";
    }
  }

}

interface();