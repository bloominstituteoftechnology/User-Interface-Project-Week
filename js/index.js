// JS goes here

// Drop down 

function menuOpen() {
    document.getElementById("hidden-menu").style.width = "100%";
}

function menuClose() {
    document.getElementById("hidden-menu").style.width = "0%";
}

//Above is the menu for each page

//Below is components being added to each page. The body etc. 

let body = document.querySelector("body");
body.addEventListener("contextmenu", (element)=> {
    element.preventDefault(); 
    alert("Right clicking has been disabled!"); //Question would this be a secure method for protecting user profiles from password hacks? 
}); //works now

// body.addEventListener("keypress", (element) => {
//     alert("We can't see what you type here. Please contact us by phone at 1(8")
// });

body.addEventListener("copy", function(e){
    e.clipboardData.setData('text/plain', 'Not so fast this is copyrighted material.');
    e.preventDefault();        
});

body.addEventListener("dragstart", (e) => {
    e.preventDefault();
});

body.addEventListener("select", (e) => {
        alert("Please reference www.greatidea.io"); 
});




  
  
  


