function contact() {


    let menuOpen = true;

    const menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", clickMenu);
    
    const formInput2 = document.querySelector(".input2");
    formInput2.addEventListener("click", inputFocus2);
    
    let menu = document.querySelector(".nav");
    
    const formInput = document.querySelector(".input");
    formInput.addEventListener("click", inputFocus);
      
    function clickMenu() {
      if (menuOpen === true) {
        menu.classList.remove("nav-close");
        menu.classList.add("nav-open");
        menuOpen = false;
      } else {
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

      function inputFocus2() {
        // clears the input for the user to type their email
        if (formInput2.value === "Enter Email:") {
          formInput2.value = "";
        }
      }
      
}

contact();