// JS goes here

// nav bar click handler
const nav = document.querySelector(".hamburger-menu");
const navIcon = document.querySelector(".hamburger-icon");
navIcon.addEventListener("click", function() {
  nav.classList.toggle("hamburger-menu-toggle");
  document.querySelector(".nav-menu").classList.toggle("nav-hide");
  document.querySelector(".nav-x").classList.toggle("nav-show");
});

// carousel testing
// let tab = 0;
// setInterval(pickTab, 1000);
// function pickTab() {
//   tab++;
//   if (tab > 3) {
//     tab = 0;
//   }
//   console.log(tab);
//   tabs[tab].selectTab();
//   console.log(123);
// }

// fadeout element
function fadeOut(element) {
  var fadeTarget = document.querySelector(element);
  var fadeEffect = setInterval(function() {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
      fadeTarget.style.display = "none";
    }
  }, 50);
}

// fadein element
function fadeIn(element) {
  var fadeTarget = document.querySelector(element);
  var fadeEffect = setInterval(function() {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 0;
    }
    if (fadeTarget.style.opacity <= 0) {
      fadeTarget.style.opacity += 0.1;
    } else {
      clearInterval(fadeEffect);
      // fadeTarget.style.display = "none"
    }
  }, 50);
}
