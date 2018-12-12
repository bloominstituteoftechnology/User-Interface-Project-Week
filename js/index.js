// JS goes here

// ==================== Navigation

document.querySelector(".hamburger").addEventListener("click", function() {
    TweenLite.to(".navbar", .5, {className:"expanded-navbar"});
});

document.querySelector(".hamburger-close").addEventListener("click", function() {
    TweenLite.to(".expanded-navbar", .5, {className:"navbar"});
});

// ==================== Services Tabs

class Tab {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.tab;

        this.content = document.querySelector(`.tab-content[data-tab="${this.data}"]`);

        this.element.addEventListener("click", () => this.select());

        document.querySelectorAll(".tab-content").forEach((content) => content.style.display = "none");

    }

    select() {
        document.querySelectorAll(".tab-content").forEach((content) => content.style.display = "none");

        this.content.style.display = "flex";

        document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("selected-tab"))

        this.element.classList.add("selected-tab");
    }
}

document.querySelectorAll(".tab").forEach((element) => new Tab(element));
