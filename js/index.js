// JS goes here

document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("expanded-navbar")
})

document.querySelector(".hamburger-close").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("expanded-navbar")
})

class Tab {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.content = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
        console.log(this.content);
        this.element.addEventListener("click", () => this.select())
    }

    select() {
        
    }
}

document.querySelectorAll(".tab").forEach((element) => new Tab(element));