// JS goes here

// navbar scroll

let navbar = document.querySelector(".navigation");

window.addEventListener("scroll", function() {
    navbar.style.background = "#9DA7B1";
    navbar.style.opacity = ".95";
   
})


// navbar dropdown 


let dropdownContent = document.querySelector(".dropdown-content");
let containerJumbo = document.querySelector(".jumbo-home #container-jumbo");

let hamburger = document.querySelector(".drop-ham");

hamburger.addEventListener("click", function() {
   containerJumbo.classList.toggle("overlay");

//    var home = document.createElement("A");
    // home.setAttribute("href", "./index.html");
    // home.innerHTML = "home"; 
    // console.log(home);

   
});

// Services

let buttonOne = document.querySelectorAll(".services-main button")[0];
let buttonTwo = document.querySelectorAll(".services-main button")[1];
let buttonThree = document.querySelectorAll(".services-main button")[2];
let buttonFour = document.querySelectorAll(".services-main button")[3];


let preCon = document.querySelector(".button-text #pre-construction");
let construction = document.querySelector(".button-text #construction");
let designBuild = document.querySelector(".button-text #design-build");
let sustain = document.querySelector(".button-text #sustain")

buttonOne.addEventListener("click", function() {
    // tab display 
    preCon.style.display = "block";
    preCon.style.padding = "50px 0px";
    construction.style.display = "none";
    designBuild.style.display = "none";
    sustain.style.display = "none";
    // button display 
    buttonOne.style.background = "#5E9FB9";
    buttonOne.style.color = "white";
    buttonTwo.style.background = "white";
    buttonTwo.style.color = "black";
    buttonThree.style.background = "white";
    buttonThree.style.color = "black";
    buttonFour.style.background = "white";
    buttonFour.style.color = "black";
})


buttonTwo.addEventListener("click", function() {
    // tab display 
    construction.style.display = "block";
    construction.style.padding = "50px 0px";
    preCon.style.display = "none";
    designBuild.style.display = "none";
    sustain.style.display = "none";
    // button display
    buttonTwo.style.background = "#5E9FB9";
    buttonTwo.style.color = "white";
    buttonOne.style.background = "white";
    buttonOne.style.color = "black";
    buttonThree.style.background = "white";
    buttonThree.style.color = "black";
    buttonFour.style.background = "white";
    buttonFour.style.color = "black";
    
})

buttonThree.addEventListener("click", function() {
    // preCon.classList.remove("display-test-and-image");
    designBuild.style.display = "block";
    designBuild.style.padding = "50px 0px";
    preCon.style.display = "none";
    construction.style.display = "none";
    sustain.style.display = "none";
    // button display 
    buttonThree.style.background = "#5E9FB9";
    buttonThree.style.color = "white";
    buttonOne.style.background = "white";
    buttonOne.style.color = "black";
    buttonTwo.style.background = "white";
    buttonTwo.style.color = "black";
    buttonFour.style.background = "white";
    buttonFour.style.color = "black";
})


buttonFour.addEventListener("click", function() {
    // preCon.classList.remove("display-test-and-image");
    sustain.style.display = "block";
    sustain.style.padding = "50px 0px";
    preCon.style.display = "none";
    construction.style.display = "none";
    designBuild.style.display = "none";
    // button display 
    buttonFour.style.background = "#5E9FB9";
    buttonFour.style.color = "white";
    buttonTwo.style.background = "white";
    buttonTwo.style.color = "black";
    buttonThree.style.background = "white";
    buttonThree.style.color = "black";
    buttonOne.style.background = "white";
    buttonOne.style.color = "black";
})



