class MenuItems {
    constructor(item) {
        this.item = item;
        this.button = document.querySelector(".ham-button");
        this.content = document.querySelector(".toggle");
        this.button.addEventListener("click", () => {this.expand()});
    }

    expand() {
        this.content.classList.toggle("hide");
        this.button.classList.toggle("close");
    }
}

let menu = document.querySelectorAll(".popup ul li a");
menu= Array.from(menu).map(item => new MenuItems(item));