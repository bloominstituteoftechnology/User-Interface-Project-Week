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
        console.log(this.element)

    }
}

document.querySelectorAll(".tab").forEach((element) => new Tab(element));