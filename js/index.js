// JS goes here

// navigation opener

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

document.addEventListener("keydown", e => {
  if (e.keyCode === 66) {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 65) {
        document.addEventListener("keydown", e => {
          if (e.keyCode === 67) {
            document.addEventListener("keydown", e => {
              if (e.keyCode === 75) {
                document.addEventListener("keydown", e => {
                  if (e.keyCode === 70) {
                    document.addEventListener("keydown", e => {
                      if (e.keyCode === 76) {
                        document.addEventListener("keydown", e => {
                          if (e.keyCode === 73) {
                            document.addEventListener("keydown", e => {
                              if (e.keyCode === 80) {
                                //do a backflip
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
