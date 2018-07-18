// class Buttons {
//     constructor(element){
// this.element = element; 
// this.buttons = this.element.querySelectorAll(".servicesbuttons");
// this.buttons = Array.from(this.buttons).map(button =>  new ButtonLink(button, this));

// this.activeButton = this.buttons[0];
// this.init();
// }

// init(){
//     this.activeButton.selectButton();
    
// }

// updateActive(buttonElement){
//     this.activeButton.deselectButton();
//     this.activeButton = buttonElement;
// }

// getContent(data){
//     if(data === 'all') {
//         return document.querySelectorAll(".servicescontent")
//     } else{
//  return document.querySelectorAll(`.servicescontent[data-content="${data}"]`)
//     }
//  }

// }

// class ButtonLink{
//     constructor(element, parent){
//         this.element = element;
//         this.buttonparent = parent;
//         this.content = this.buttonparent.getContent(this.element.dataset.button);
//         this.content = Array.from(this.content).map(contents => new ContentDisplay(contents));
//         this.element.addEventListener("click", () => {this.selectButton()});
//     }

//     selectButton(){
//         this.buttonparent.updateActive(this);
//         this.element.classList.add("active-button");
//         this.content.forEach(contents => contents.selectContent());
//     }

//     deselectButton(){
//         this.element.classList.remove("active-button");
//         this.content.forEach(contents => contents.deselectContent());
//     }
// }

// class ContentDisplay{
//     constructor(element){
//         this.element = element; 
//     }

//     selectContent(){
//         this.element.style.display = null;
//     }

//     deselectContent(){
//         this.element.style.display = "none";
//     }
// }


// let buttons = document.querySelectorAll(".buttonparent");
// buttons = Array.from(buttons).map(button => new Buttons(button));


class Buttons {
    constructor(element){
this.element = element; 
this.buttons = this.element.querySelectorAll(".servicesbuttons");
this.buttons = Array.from(this.buttons).map(button =>  new ButtonLink(button, this));
this.activeButton = this.buttons[0];
}
}

class ButtonLink{
    constructor(buttons, buttonparent){
    this.buttons = buttons;
    this.content = document.querySelectorAll(`.servicescontent[data-content="${this.buttons.dataset.button}"]`);
    this.content = Array.from(this.content).map(contents => new ContentDisplay(contents)); 

    this.buttons.addEventListener('click', () => { 
     if(this.buttons !== this.content){
        this.content.style.display = "none";
     }    
     else {
        return this.content;
     }

    });
}
}

class ContentDisplay{
    constructor(contents){
        this.contents = contents; 

    }
}

let buttons = document.querySelectorAll(".buttonparent");
buttons = Array.from(buttons).map(button => new Buttons(button));
