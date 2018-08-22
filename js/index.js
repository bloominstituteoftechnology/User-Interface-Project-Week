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
    //defines button for passed in button info
    this.button = button;
    //gets button dataset info
    this.data = this.button.dataset.services;
    //matches button to content based on data tag
    this.content = document.querySelector(
      `.services[data-services="${this.data}"]`
    );
    //using content element creates a new instance of Content class
    this.matchingContent = new Content(this.content);
    this.button.addEventListener("click", () => {
      this.toggleContent();
      event.preventDefault();
    });
  }
  toggleContent() {
    //selects all buttons
    let buttons = document.querySelectorAll(".button");
    //removes button-clicked off of all buttons
    buttons.forEach(button => button.classList.remove("button-clicked"));
    //adds button-clicked to clicked button
    this.button.classList.toggle("button-clicked");
    this.matchingContent.content();
  }
}

class Content {
  constructor(element) {
    this.element = element;
  }
  content() {
    //select all service content divs from the dom
    const items = document.querySelectorAll(".services");
    //removed displayed-services from all service content divs
    items.forEach(item => item.classList.remove("displayed-services"));
    this.element.classList.toggle("displayed-services");
  }
}

let buttons = document.querySelectorAll(".button");
buttons = Array.from(buttons).map(button => new Button(button));


////
//// Inspiration Page JS
class Demo {
  constructor(image) {
    this.image = image;
    //gets dataset info for demo image
    this.data = this.image.dataset.set;
    //gets mainslide corresponding to demo image data
    this.slide = document.querySelector(`.slides[data-set="${this.data}"`);
    //adds click listener to demo image
    this.image.addEventListener("click", () => {
      this.displayImage();
      console.log(`${this.slide}`)
    });
  }
  displayImage() {
    //gets nodelist of all large image elements
    let images = document.querySelectorAll(".slides");
  
    //set display on each nodelist item to none
    images.forEach(slide => slide.classList.remove("visible"));
    //
    this.slide.classList.toggle('visible');
  }
}

//capture demo images
let demoImages = document.querySelectorAll(".demo");
Array.from(demoImages).map(image => new Demo(image));

class Demovw {
  constructor(image) {
    this.image = image;
    //gets dataset info for demo image
    this.data = this.image.dataset.set;
    //gets mainslide corresponding to demo image data
    this.slide = document.querySelector(`.vwslides[data-set="${this.data}"`);
    //adds click listener to demo image
    this.image.addEventListener("click", () => {
      this.displayImage();
      console.log('hi')
    });
  }
  displayImage() {
    //gets nodelist of all large image elements
    let images = document.querySelectorAll(".vwslides");
  
    //set display on each nodelist item to none
    images.forEach(slide => slide.classList.remove("visible"));
    //
    this.slide.classList.toggle('visible');
  }
}

//capture demo images
let demovwImages = document.querySelectorAll(".demovw");
Array.from(demovwImages).map(image => new Demovw(image));



