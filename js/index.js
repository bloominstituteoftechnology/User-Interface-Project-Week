// JS goes here
var menuItems = document.querySelectorAll(".services-content-menu li");
var innerContent = document.querySelectorAll(".services-inner-content");
var navBar = document.querySelector(".mynav");
var overlayButton = document.querySelector(".mynav img");
var overlay = document.querySelector(".overlay");
console.log(overlayButton.getAttribute("src"))
window.addEventListener("scroll", function(){
  navBar.style.backgroundColor = "#9DA7B1";
  navBar.style.opacity = ".95";
});
menuItems.forEach(function (button,index){
  button.addEventListener("click", function(){
    if(button.dataset.content == "false"){
      // add hidden attr to all content
      console.log(index);
      innerContent.forEach(element => element.setAttribute("hidden", "true"));
      // make content = true
      button.dataset.content == "true"
      //show content by removing hidden attr
       innerContent[index].removeAttribute("hidden");
    }
  })
});
overlayButton.addEventListener("click", function() {
if (overlay.style.display == "flex"){
overlayButton.setAttribute("src", "img\\nav-hamburger.png");
console.log("hi")
overlay.style.display = "none";
}
else overlay.style.display = "flex";
overlayButton.setAttribute("src", "img\\nav-hamburger-close.png");
});
