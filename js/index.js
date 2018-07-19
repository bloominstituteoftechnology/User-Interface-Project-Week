// JS goes here
const mainNav = document.querySelector(".main-nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", (event) => {
    menuBtn.classList.toggle("hidden");
    mainNav.classList.toggle("display-flex");
    closeBtn.classList.add("visibility");
})

closeBtn.addEventListener("click", (event) => {
    menuBtn.classList.toggle("hidden");
    mainNav.classList.toggle("display-flex");
    closeBtn.classList.remove("visibility");
})

let links = document.querySelectorAll(".link");


class Tab {
    constructor(link) {
        this.link = link;
        this.link.addEventListener("click", () => { this.linkClick() });

        this.linkData = this.link.dataset.tab;
        this.tabContent = document.querySelector(`.content[data-tab="${this.linkData}"]`);
        this.tabContent = new Content(this.tabContent);
    }

    linkClick() {
        this.tabContent.toggleContent();
    }
}

class Content {
    constructor(tabContent) {
        this.tabContent = tabContent;
    }

    toggleContent() {
        this.tabContent.classList.toggle("tab-show");
    }
}

links = Array.from(links).map(link => new Tab(link));