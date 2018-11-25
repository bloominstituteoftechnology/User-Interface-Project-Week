class NavBar{
    constructor(element){
        this.element = element;

        //get the hamburger button
        this.navBtn  = element.querySelector('.menu-img');
    
        //get the nav menu
        this.navMenu = this.element.querySelector('.nav-menu');
        
        //add click listenr to hamburger
        this.navBtn.addEventListener('click',()=>{
            this.click();
        })
    }

    click(){
        //toggle the display class
        this.navMenu.classList.toggle('display-none');
    }
}

//make a new nav bar component
const nav = new NavBar( document.querySelector('.nav-container') );