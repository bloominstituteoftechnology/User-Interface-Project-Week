// JS goes here

// navigation opener

const hamburger = document.querySelector(".hamburger");
const headerDiv = document.querySelector(".header");
const nav = document.querySelector(".nav");
const headerElement = document.querySelector("header");
const container = document.querySelector(".container");
hamburger.addEventListener("click", () => {
  nav.classList.remove("nav-hidden");
  headerDiv.classList.add("expanded");
  nav.classList.add("expanded-nav");
  headerElement.classList.add("expanded-header");
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
