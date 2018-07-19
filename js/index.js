// JS goes here
console.log("is it working?")

console.log("vance is awesome and he totaly can do this")



const hamburgerMenu = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close-button");
const menuNav = document.querySelector(".menu-navigation");


hamburgerMenu.addEventListener("click", (event)=> {
    // console.log("I work when clicked!");
    menuNav.classList.toggle("full-display");


    // const x = closeButton.classList.toggle("close-button");
    // if (x){
    //     hamburgerMenu.classList.toggle("hamburger-none")
    //     closeButton.classList.toggle("display-close");
    //     console.log("hamburger off");
    // }else{
    //     hamburgerMenu.classList.toggle("hamburger");
    //     console.log("hamburger on");
    // }
    
    // hamburgerMenu.classList.toggle("hamburger-none");
    
});

// closeButton.addEventListener("click", (event) =>{
    
    



// });




// const mainNav = document.querySelector(".main-nav");
// menuBtn.addEventListener("click", (event) => {
//     //mainNav.style.display = "flex"; 
//     //console.log(mainNav.classList);
//     mainNav.classList.toggle("display-flex");







//-------------------------------------------------------------------
//services tabs below




class LinkTabs{
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", () => {this.tabClicked()});

        this.linkTabs = this.element.dataset.tab;

        this.tabContent = document.querySelector(`.tab-content[data-tab="${this.linkTabs}"]`);
        this.tabContent = new Content(this.tabContent);

    }
    tabClicked() {
        console.log("I was clicked");
        this.tabContent.toggleContent();
    }

}

class Content {
    constructor(tabContent){
        this.tabContent = tabContent;

    }
    toggleContent() {
        this.tabContent.classList.toggle("tab-content");
        this.tabContent.classList.toggle("tab-show");
        console.log(this.tabContent);
    }
}














let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map(tab => new LinkTabs(tab));










































// class Tabs {
//     constructor(element){
//         this.element = element;
//         this.serviceTab = document.querySelectorAll(".tab");
//         // console.log(this.serviceTab);
//         this.serviceTabArr = Array.from(this.serviceTab).map( servTab => new TabContent(servTab, this));
//         // console.log("I work");
//         // console.log(this.serviceTabArr);
//     }

//     updateActiveTab(){

//     }

//     getTabs(data){
//         if(data === "pre-construction"){
//             return document.querySelector(`.tab[data-tab="pre-construction"]`);
//         } else{
//             return document.querySelector(`.tab[data-tab="${data}"]`);
//         }
//     }

// }


// class TabContent {
//     constructor(element, parent){
//         this.element = element;
//         this.parent = parent;
//         this.constTabs = this.parent.getTabs(this.element.dataset.tab);
//         this.constTabs = Array.from(this.constTabs).map(tabDisplay => new TabOnOFF));
//         this.element.addEventListener('click', () => {this.selectTab()});
//         console.log(this.element);



//     }
//     selectTab(){
//         this.parent.updateActiveTab(this);

//         this.element.classlist.add('active-tab');

//         this.constTabs.forEach( tabC => tabC.deselectTab());
//     }

//     deselectTab(){
//         this.element.classList.remove('active-tab');
//         this.constTabs.forEach( tabC => tabC.deselectTab());

//     }

// }



// let tabs = document.querySelectorAll(".tabs");

// tabs = Array.from(tabs).map (tablink => new Tabs (tablink));