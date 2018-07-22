// Carousel
class Pictures {
    constructor(element){
      this.element = element;
      this.pictures = this.element.querySelectorAll('.picture');
      this.pictures = Array.from(this.pictures).map( picture => {
        return new Picture(picture);
      });
      this.state = 0;
      this.leftPointer = this.element.querySelector('.left-pointer');
      this.leftPointer.addEventListener('click', () => {
        if (this.state < 1){
          this.state += this.pictures.length-1;
        } else {
          this.state -= 1;
        }
        this.updateActive(this.pictures[this.state]);
      });
      this.rightPointer = this.element.querySelector('.right-pointer');
      this.rightPointer.addEventListener('click', () => {
        if (this.state >= this.pictures.length - 1){
          this.state = 0
        } else {
          this.state += 1;
        }
        this.updateActive(this.pictures[this.state]);
      });
      this.activePicture = this.pictures[this.state];
      this.init();
    }
  
    init() { 
      this.activePicture.makeVisible();
    }
  
    updateActive(newActive) {
      this.activePicture.makeHidden();
      this.activePicture = newActive;
      this.activePicture.makeVisible();
    }
  }

  class Picture {
    constructor(picture){
      this.picture = picture;
      this.description = document.querySelector(`.description[data-tab="${this.picture.dataset.tab}"]`);
    }
  
    makeVisible(){
      this.picture.classList.add('active-picture');
      this.description.classList.add('active-description');
      TweenMax.from('.active-picture', 1, {x:300, opacity:0});
      TweenMax.from('.active-description', 1, {x:300, opacity:0});
    }
    makeHidden(){
      this.picture.classList.remove('active-picture');
      this.description.classList.remove('active-description');
    }
  }
  
  let pics = document.querySelectorAll('.pictures');
  
  pics = Array.from(pics).map(picture => new Pictures(picture));


// class Pictures {
//     constructor(element) {
//         this.element = element;
//         this.pictures = this.element.querySelectorAll(".picture");
//         this.pictures = Array.from(this.pictures).map( picture => {
//             return new Pictures(picture);
//         });
//         this.state = 0;
//         this.leftPointer = this.element.querySelector(".left-pointer");
//         this.leftPointer.addEventListener('click', () => {
//             if (this.state < 1){
//                 this.state += this.pictures.length-1;
//             } else {
//                 this.state -= 1;
//             }
//             this.updateActive(this.pictures[this.state]);
//         });
//         this.rightPointer = this.element.querySelector('.right-pointer');
//         this.rightPointer.addEventListener('click', () => {
//             if (this.state < 1) {
//                 this.state += this.pictures.length-1;
//             } else {
//                 this.state -= 1;
//             }
//             this.updateActive(this.pictures[this.state]);
//         });
//         this.activePicture = this.pictures[this.state];
//         this.init();
//     }
//     init() {
//         this.activePicture.makeVisibile();
//     }
//     updateActive(newActive) {
//         this.activePicture.makeHidden();
//         this.activePicture = newActive;
//         this.activePicture.makeVisible();
//     }
// }
// 
// class Picture{
//     constructor(picture) {
//         this.picture = picture;
//         this.description = docuemnt.querySelector(`.description[data-tab="${this.picture.dataset.tab}"]`);
//     }
//     makeVisibile() {
//         this.picture.classList.add('active-picture');
//         this.description.classList.add('active-description');
//     }
//     makeHidden(){
//         this.picture.classList.remove('active-picture');
//         this.description.classList.remove('active-description');
//     }
// }

// let pics = document.querySelectorAll('.pictures');

// pics = Array.from(pics).map(picture => new Pictures(picture));
