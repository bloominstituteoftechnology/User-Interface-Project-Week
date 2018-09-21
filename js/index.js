// JS goes here

//show none of the content but display one on-click
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    links = document.getElementsByClassName("links");
    for (i = 0; i < links.length; i++) {
        links[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
//index html JS
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
  //keep hamburger in place until X is added.
  if(navBarToggle.style.display = 'none'){
    navBarToggle.style.display = 'block';
  }
 
});
