// JS goes here

// navbar menu

class Navbar {
    constructor(element) {
        this.element = element
        this.button = this.element.querySelector('.navBurger')
        this.content = this.element.querySelector('.dropdownNav')

        this.button.addEventListener("click", () => {
            this.toggleContent(event);
        })
    }

    toggleContent() {
        this.content.classList.toggle("navHidden")
    }
}

let navbar = document.querySelectorAll(".navbar")
navbar = Array.from(navbar).map(navbar => new Navbar(navbar))

let navBurger = document.querySelector(".navBurger")

navBurger.addEventListener("click", () => {
    navBurger.classList.toggle("dropdownNavToggle")
})