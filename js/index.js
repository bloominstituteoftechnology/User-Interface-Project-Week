// JS goes here
const navButton = document.querySelector(".navContainer .hamburger");
const navContainer = document.querySelector(".navContainer")
const links = document.querySelector(".links");
console.log(links);
navButton.addEventListener("click", ()=>{
    navContainer.classList.toggle("navExpand");
    links.classList.toggle("linksAppear");
    console.log(links);
    navButton.classList.toggle("hamburgerClose");
})



class Tab{
    constructor(tabElement){
        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;
        this.tabContent = document.querySelector(`.tabContent[data-tab='${this.tabData}']`);
        
        this.tabContent = new tabContent(this.tabContent);
        this.tabElement.addEventListener("click", ()=> {
            this.selectTab();
        })
   
    }

    selectTab(){
        const tabs = document.querySelectorAll(".servicesButtons");
        const tabsContent = document.querySelectorAll(".tabContent");

        tabs.forEach(tab => {
            tab.classList.remove("activeButton");
        })
        
        tabsContent.forEach(content => {
            content.style.display = "none";
        })

        this.tabElement.classList.add("activeButton");

        this.tabContent.selectContent();
    }


}

class tabContent{
    constructor(contentElement){
        this.contentElement = contentElement;
    }

    selectContent(){
        this.contentElement.style.display = "flex";
    }
}

let tabs = document.querySelectorAll('.servicesButtons').forEach(button => new Tab(button));