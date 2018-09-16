// JS goes here

/* Nav bar expansion code */
const navButton = document.getElementById("NavImg");
const navExpansion = document.querySelector('.NavExpansion');
console.log(navExpansion);
navButton.onclick = function (event) {
    if (navExpansion.style.display == "flex") {
        navExpansion.style.display = "none";
    }
    
    else if (navExpansion.style.display !== "flex") {
        navExpansion.style.display = "flex";
    }
};
console.log(navButton);