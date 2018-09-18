function contact() {

    const menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", clickMenu);
    
    const formInput2 = document.querySelector(".input2");
    formInput2.addEventListener("click", inputFocus2);
    
    let menu = document.querySelector(".nav");
    
    const formInput = document.querySelector(".input");
    formInput.addEventListener("click", inputFocus);
    const navButton = document.querySelector(".nav-button");
    navButton.addEventListener("click", clickMenu);
    
    function clickMenu() {
      menu.classList.toggle("nav-open");
      menuButton.classList.toggle("menu-button-close");
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