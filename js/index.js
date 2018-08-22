// JS goes here

const hamburgerButton = document.querySelector(".hamburger-img");

const closeButton = document.querySelector(".hamburger-close-img");
closeButton.classList.add("display-off");

const dropdownContent = document.querySelector(".dropdown-content");
dropdownContent.classList.add("display-off");

hamburgerButton.addEventListener('click', (event) => {
    hamburgerButton.classList.toggle("display-off");
    closeButton.classList.toggle("display-off");
    dropdownContent.classList.toggle("display-off");    
});
closeButton.addEventListener('click', (event) => {
    hamburgerButton.classList.toggle("display-off");
    closeButton.classList.toggle("display-off");
    dropdownContent.classList.toggle("display-off");    
});


