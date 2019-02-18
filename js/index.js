// JS goes here
const hamburger = document.querySelector("#hamburger");
const dotHeader = document.querySelector(".header");
const nav = document.querySelector(".nav");
const headerElement = document.querySelector("header");
const container = document.querySelector(".container");
const headerDiv = document.querySelector(".header-div");
let counter = 2;
hamburger.addEventListener("click", () => {
  if (counter % 2 === 0) {
    nav.classList.remove("nav-hidden");
    dotHeader.classList.add("expanded");
    nav.classList.add("expanded-nav");
    headerElement.classList.add("expanded-header");
    headerDiv.classList.add("expanded-header-div");
    hamburger.src = "img\\nav-hamburger-close.png";
  } else {
    nav.classList.add("nav-hidden");
    dotHeader.classList.remove("expanded");
    nav.classList.remove("expanded-nav");
    headerElement.classList.remove("expanded-header");
    headerDiv.classList.remove("expanded-header-div");
    hamburger.src = "img\\nav-hamburger.png";
  }
  counter++;
});



// reset input when pressing esc
document.body.addEventListener("keyup", e => {
  if (e.keyCode === 27) input = "";
});

function getDegrees(property) {
  let arr = property.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
    } else {
      newArr.push(arr[i]);
    }
  }
  newArr = newArr.join("");
  return newArr;
}

const ham = document.querySelector("#hamburger");

const aTags = document.querySelectorAll(".nav a");
TweenMax.from(aTags[0], 5, {opacity: .1});

ham.addEventListener("click", () => {
  for (let i = 0; i < aTags.length; i++) {
    TweenMax.to(aTags[i], 5, {color: "black"});
  }
});