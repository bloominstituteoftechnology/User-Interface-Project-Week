// carousel

class Carousel {
  constructor (carouselElement) {
    // assign this.carousel to DOM element
    this.carousel = carouselElement;
    // assign left and right buttons by class selector
    this.ltButton = this.carousel.querySelector(".left-button");
    this.rtButton = this.carousel.querySelector(".right-button");
    // set current index
    this.currIndex = 0;
    // create array of CarouselImage objects from each img type within carousel
    this.images = Array.from(this.carousel.querySelectorAll("img"))
      .map(img => new CarouselImage(img));
    // display first image
    this.images[this.currIndex].img.style.display = "block";
    // add event listeners to buttons:
    this.ltButton.addEventListener('click', () => this.btnClick("left"));
    this.rtButton.addEventListener('click', () => this.btnClick("right"));
  }
  
  btnClick(btn) {
    // store previous index
    let prevIndex = this.currIndex;
    let exit = '';
    let enter = '';
    console.log(btn);
    // check which button, update index accordingly:
    if (btn === "left"){
      // update this.currIndex to move one left or to end if at beginning
      exit = 'right';
      enter = 'left'
      if (this.currIndex === 0) {
        // zoom back through carousel
        this.currIndex = this.images.length - 1;
        for (let i = 0; i < this.currIndex; i++) {
          setTimeout(() => {
            // Remember: animations/directions in here are reversed!
            this.images[i].exitImg(enter);
            this.images[i + 1].enterImg(exit);
          },100 * i*2);
        }
      } else {
        this.currIndex --;
        // hide current img
        this.images[prevIndex].exitImg(exit); 
        // display next img
        this.images[this.currIndex].enterImg(enter);
      }
    } else {
      // right button pressed: update this.currIndex to move one right or back to beginning if at end
      exit = 'left';
      enter = 'right';
      if (this.currIndex === this.images.length - 1) {
        // zoom back through carousel 
        this.currIndex = 0;
        let invert = this.images.length - 1;
        for (let i = 0; i < invert; i++) {
          setTimeout(() => {
            this.images[invert - i].exitImg(enter);
            this.images[invert - (i + 1)].enterImg(exit);
          },100 * i*2);
        }
      } else {
        this.currIndex ++;
        // hide current img
        this.images[prevIndex].exitImg(exit);
        // display next img
        this.images[this.currIndex].enterImg(enter);
      }
    }
    
  } // btnClick
}

class CarouselImage {
  constructor (imgElement) {
    this.img = imgElement;
    this.index = this.img.dataset.index;
    this.animateDuration = .3;
    this.animateEase = Cubic.easeOut;
  }

  enterImg(direction) {
    this.img.style.display = "block";
    if (direction == "left") {
      TweenMax.fromTo(this.img, this.animateDuration, {
        x:-1200
      },{
        x:0,
        ease: this.animateEase
      });
    } else {
      // console.log("image entering ", direction);
      TweenMax.fromTo(this.img, this.animateDuration, {
        x:1200
      },{
        x:0,
        ease: this.animateEase
      });
    }
  }

  exitImg(direction) {
    this.img.style.display = "none";
    if (direction == "left") {
      TweenMax.fromTo(this.img, this.animateDuration, {
        x:0
      },{
        x:-1200,
        ease: this.animateEase,
        onComplete: () => {this.img.style.display = "none"}
      });
    } else {
      TweenMax.fromTo(this.img, this.animateDuration, {
        x:0
      },{
        x:1200,
        ease: this.animateEase,
        onComplete: () => {this.img.style.display = "none"}
      });
    }
  }

}

let carousel = new Carousel(document.querySelector(".carousel"));
