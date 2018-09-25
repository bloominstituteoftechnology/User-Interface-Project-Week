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
                                let degrees = getDegrees(document.body.style.transform);
                                document.body.style.setProperty(
                                  "transform",
                                  `rotate(${degrees - 180}deg)`,
                                  null
                                );
                                console.log(degrees);
                                
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


function getDegrees(property) { 
  let arr = property.split('');
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(isNaN(arr[i])){

    } else {
      newArr.push(arr[i]);
    }
  }
  newArr = newArr.join('');
  console.log(newArr);
  return newArr;
}