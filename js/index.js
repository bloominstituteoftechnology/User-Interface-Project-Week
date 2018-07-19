// JS goes here
console.log("is it working?")

console.log("vance is awesome and he totaly can do this")



const hamburgerMenu = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close-button");
const menuNav = document.querySelector(".menu-navigation");


hamburgerMenu.addEventListener("click", (event)=> {
    // console.log("I work when clicked!");
    menuNav.classList.toggle("full-display");


    // const x = closeButton.classList.toggle("close-button");
    // if (x){
    //     hamburgerMenu.classList.toggle("hamburger-none")
    //     closeButton.classList.toggle("display-close");
    //     console.log("hamburger off");
    // }else{
    //     hamburgerMenu.classList.toggle("hamburger");
    //     console.log("hamburger on");
    // }
    
    // hamburgerMenu.classList.toggle("hamburger-none");
    
});

// closeButton.addEventListener("click", (event) =>{
    
    



// });




// const mainNav = document.querySelector(".main-nav");
// menuBtn.addEventListener("click", (event) => {
//     //mainNav.style.display = "flex"; 
//     //console.log(mainNav.classList);
//     mainNav.classList.toggle("display-flex");

