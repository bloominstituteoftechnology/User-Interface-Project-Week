////////////////////////////////
class Tabs {
    constructor(tab){
        this.tab = tab;
        this.data = this.tab.dataset.tab;
        this.image = document.querySelector(`.tab-image[data-image="${this.data}"]`);
        this.header = document.querySelector(`.tab-header[data-tab="${this.data}"]`);
        if(this.data==="1"){
            this.image.style.display = "inline";
            this.header.style.display = "block";
            this.tab.classList.add("selected");
        }
        this.tab.addEventListener("click",() => this.tabSelect());
    }
    tabSelect(){
        const tabs = Array.from(document.querySelectorAll(`.tab`));
        const images = Array.from(document.querySelectorAll(`.tab-image`));
        const headers = Array.from(document.querySelectorAll(`.tab-header`));
        tabs.forEach(ele => ele.classList.remove("selected"));
        images.forEach(ele => ele.style.display = "none");
        headers.forEach(ele => ele.style.display = "none");
        this.image.style.display = "inline";
        this.header.style.display = "block";
        this.tab.classList.add("selected");
    }
}

////////////////////////////////
function navToggle(){
    const menuImage = navButton.getAttribute("src")
    if(menuImage === "img/nav-hamburger.png"){
        navButton.setAttribute("src","img/nav-hamburger-close.png")
    } else {
        navButton.setAttribute("src","img/nav-hamburger.png")
    }
    navLinks.classList.toggle("links-toggle");
}
/////////

////////////////////////////////
const navButton = document.querySelector(".hamburger");
const navLinks = document.querySelector(".links");
////////////////////////////////
let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(ele => new Tabs(ele));
////////////////////////////////
navButton.addEventListener("click",navToggle);