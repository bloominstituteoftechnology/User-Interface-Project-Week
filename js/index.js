// JS goes here
function openNav() {
    document.getElementById("myMenu").style.width = "100%";
}

function closeNav() {
    document.getElementById("myMenu").style.width = "0";
}
let open = false;

const menu_button = document.getElementById("myMenuButton");
menu_button.style.backgroundImage = `url('../img/nav-hamburger.png')`
        
console.log(menu_button)
menu_button.addEventListener('click', e => {
    console.log("Clicked")
    console.log(open)
    if (open){
        menu_button.style.backgroundImage = `url('../img/nav-hamburger.png')`
        open = false
        closeNav()
    }
    else {
        menu_button.style.backgroundImage = `url('../img/nav-hamburger-close.png')`
        open = true
        openNav() 
    }   
})