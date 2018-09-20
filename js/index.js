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
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();