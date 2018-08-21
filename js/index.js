const hamburgerIMG = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

hamburgerIMG.addEventListener("click", () => {
  menu.classList.toggle("menu-hidden");
  hamburgerIMG.classList.toggle("display-none");
  close.classList.toggle("display-none");
});

close.addEventListener("click", () => {
  menu.classList.toggle("menu-hidden");
  hamburgerIMG.classList.toggle("display-none");
  close.classList.toggle("display-none");
});

class Button {
  constructor(button) {
    this.button = button;
    this.button.classList.toggle("button-clicked");
    this.button.addEventListener("click", () => {
      this.toggleContent();
    });
  }
  toggleContent() {
      let buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.classList.remove("button-clicked"));
    this.button.classList.toggle("button-clicked");
    event.preventDefault();
    
  }
}

let buttons = document.querySelectorAll(".button");
buttons = Array.from(buttons).map(button => new Button(button));
