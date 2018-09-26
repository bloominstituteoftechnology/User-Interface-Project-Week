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

// scroll reveal animations

window.sr = ScrollReveal({ mobile: false });

sr.reveal(".landing-container h1", {
  origin: "left",
  delay: 500,
  interval: 350,
  distance: "300px"
});

const mainContentWrapper = document.querySelectorAll(".main-content-wrapper");
const recentProjects = document.querySelectorAll(".recent-projects-container");
sr.reveal(mainContentWrapper[0], {
  origin: "left",
  delay: 500,
  distance: "500px"
});

sr.reveal(mainContentWrapper[1], {
  origin: "right",
  delay: 700,
  distance: "500px"
});

sr.reveal(recentProjects[0], {
  origin: "left",
  delay: 200,
  distance: "500px"
});

sr.reveal(recentProjects[1], {
  origin: "right",
  delay: 400,
  distance: "500px"
});

sr.reveal(recentProjects[2], {
  origin: "left",
  delay: 600,
  distance: "500px"
});
