class Carousel {
  constructor(element) {
      this.element = element;
      this.images  = this.element.querySelectorAll('img');
      this.left    = this.element.querySelector('.left-button');
      this.right   = this.element.querySelector('.right-button');
      this.index   = 0;
      
      this.left.addEventListener('click', () => this.previousPage());
      this.right.addEventListener('click', () => this.nextPage());
  }

  previousPage() {

      // Keep track of index of image sliding out
      const  current = this.index;
  
      // Get current image out to the left
      TweenMax.to(this.images[this.index], 0.7, {xPercent:-100, opacity: 0, ease: Power4.easeOut});
      TweenMax.to(this.images[this.index], 0.7, {xPercent:0, delay:1});
      setTimeout(() => {
        // Make current image display: none, after image is out
        this.images[current].classList.remove('box-show');
      }, 200);  
  
      //Go to previous image
      if(this.index === 0) this.index = this.images.length-1;
      else this.index --;
  
      //Make previous image show, and slide into view from the right
      setTimeout(() => {
        this.images[this.index].classList.add('box-show');  
        this.images[this.index].style.opacity = 1;
        this.images[this.index].style.zIndex = -1;
        TweenMax.from(this.images[this.index], 0.7, {xPercent:100, opacity:0, ease: Power2.easeOut});
      }, 200);  
  }
 
  nextPage() {
          // Keep track of index of image sliding out
          const  current = this.index;
  
          // Get current image out to the left
          TweenMax.to(this.images[this.index], 0.7, {xPercent:100, opacity: 0, ease: Power4.easeOut});
          TweenMax.to(this.images[this.index], 0.7, {xPercent:0, delay:0.5});
          setTimeout(() => {
            // Make current image display: none, after image is out
            this.images[current].classList.remove('box-show');
          }, 200);  
      
          //Go to previous image
          if(this.index === this.images.length-1) this.index = 0;
          else this.index ++;
      
          //Make previous image show, and slide into view from the right
          setTimeout(() => {
            this.images[this.index].classList.add('box-show');  
            this.images[this.index].style.opacity = 1;
            this.images[this.index].style.zIndex = -1;
            TweenMax.from(this.images[this.index], 0.7, {xPercent:-100, opacity:0, ease: Power2.easeOut});
          }, 200);  
    
  }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);