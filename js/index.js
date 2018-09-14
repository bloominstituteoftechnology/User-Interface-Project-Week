// JS goes here


let menuOpenButton = document.getElementsByClassName("openOpenButton");
console.log(menuOpenButton[0]);

let menuArray = Array.from(menuOpenButton[0]);
console.log(menuArray);


function toggleMenuOpenButton () {
 menuOpenButton[0].classList.toggle = "openMenu";
}

toggleMenuOpenButton();