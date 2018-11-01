
class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(
        `.tab-content[data-tab='${this.data}']`
        );
        this.name = document.querySelector('.name')
        this.tabContent = new TabContent(this.itemElement);
        this.element.addEventListener("click", () => {
            this.select();
        });
    }

    select() {
        let links = document.querySelectorAll(".tab-link");
        Array.from(links).forEach(element => 
            element.classList.remove("tab-link-selected")
        );
        this.element.classList.add("tab-link-selected");
        this.tabContent.select();
    }
}

class TabContent {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.toggle("tab-content-selected");
        let allTabs = document.querySelectorAll(".tab-content");
        TweenMax.from(".tab-content", 0.25, {opacity:0, x:25, ease:Power0.easeNone});
        Array.from(allTabs).forEach(element => 
            element.classList.remove("tab-content-selected")
        );
        this.element.classList.add("tab-content-selected");
        console.log(this.element.classList);
    }
}

const allStaffImgs = document.querySelectorAll('.staff-img-and-name')
let staffName = document.querySelectorAll('.name')
let links = document.querySelectorAll(".tab-link");
staffName = Array.from(staffName);
links = Array.from(links).map(link => new TabLink(link));
links[0].select();

