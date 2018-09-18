
class Dropdown{
    constructor(element){

        this.element = element;
        
        this.open = false; 

        this.nav = document.querySelector("nav");  

        this.button = document.querySelector(".hamburger"); 

        this.button.addEventListener("click", () => {
            this.toggleContent()
            })
    }
    toggleContent(){
        if(this.open === false){
          this.nav.style.backgroundColor = "#9bb4be"; 
          this.nav.style.alignItems = "flex-start"; 
          this.button.style.paddingTop = "18px"; 
          this.element.style.display = "flex"; 
          this.button.setAttribute("src", "img/nav-hamburger-close.png");
          this.open = true; 
    }else {
          this.button.setAttribute("src", "img/nav-hamburger.png"); 
          this.nav.style.backgroundColor = ""; 
          this.element.style = ""; 
          this.open = false; 
    }
    }
}






let navbarMenu = document.querySelectorAll(".navbar-menu"); 
navbarMenu = Array.from(navbarMenu).map(navList =>
   new Dropdown(navList));

 