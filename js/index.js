

/*on hamburger click event
change hamburger logo to close "x"
change height of header to 100%
toggle the .hidden class
*/
class Dropdown{
    constructor(el){
        this.el = el;

        this.button = this.el.querySelector("img");
        this.navMenu = this.el.querySelector("nav");

        console.log(this.el);
        console.log(this.button);
        console.log(this.navMenu);

        this.button.addEventListener("click", () => {
            this.toggleNav();
        })
    }
    toggleNav(){
        this.navMenu.classList.toggle("hidden");
        if(this.navMenu.classList.length > 1) {
            this.el.style.height = "50px";
            this.button.src = "img/nav-hamburger.png";
        } else {
            this.el.style.height = "100%";
            this.button.src = "img/nav-hamburger-close.png";
            console.log(this.button);
        }
        console.log("I was clicked!");
    }
}

//find the .header from the DOM and create a new dropdown class
const dropdown = document.querySelector(".header");
new Dropdown(dropdown);