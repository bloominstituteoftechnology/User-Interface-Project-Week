// JS goes here

const showNavPanel = (e) => {
  console.log(`${e} was clicked`);
  // navPage.classlist.toggle('.show');
}

const navBTN = document.querySelector('#nav-icon');
const navPage = document.querySelector("#nav-page");

console.log(navBTN);
console.log(navPage);

navBTN.addEventListener("click", showNavPanel);
