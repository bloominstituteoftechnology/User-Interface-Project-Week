//Carousel  funtionality 

class Carousel{
    constructor(containerID){
    this.container = document.getElementById(containerID); 
    this.slides = this.container.querySelectorAll('.carousel');
    this.total = this.slides.length - 1; 
    this.current = 0; 
    this.slide(this.current); //This will start on slide 1.
    this.paragraphs = this.container.querySelectorAll('.p-carousel');
    this.paragraph(this.current); 
    this.headers = this.container.querySelectorAll('.h-carousel'); 
    this.header(this.current);
    
    }
    next (interval){
      (this.current === this.total) ? this.current = 0 : this.current += 1; 
  
      this.stop(); 
      this.slide(this.current);
      this.paragraph(this.current);
      this.header(this.current);
  
      if(typeof interval === 'number' && (interval % 1) === 0){
        let context = this; //allows us to access current this inside of another function.
        this.run = setTimeout(function(){
          context.previous(interval);
        }, interval); 
      }
    }
    //previous 
    previous(interval){
      (this.current !== 0) ? this.current -= 1 : this.current = this.slides.length -1;
  
      this.stop(); 
      this.slide(this.current);
      this.paragraph(this.current);
      this.header(this.current);
  
      if(typeof interval === 'number' && (interval % 1) === 0){
        let context = this; //allows us to access current this inside of another function. 
        this.run = setTimeout(function(){
          context.previous(interval); 
        }, interval); 
      }
    }
    stop() {
      clearTimeout(this.run); 
    }
    slide (index){
      if(index >= 0 && index <= this.total) {
        this.stop();
        for (let i = 0; i <= this.total; i++){
          if (i === index) {
            this.slides[i].style.display = "inline-block";
          } else {
            this.slides[i].style.display = 'none'; 
          }
        }
      } else {
        alert("Index " + index + " doesn't exist. Available : 0 - " + this.total); 
      }
    }
    header(index){
        if(index >= 0 && index <= this.total) {
          this.stop();
          for (let i = 0; i <= this.total; i++){
            if (i === index) {
              this.headers[i].style.display = "inline-block";
            } else {
              this.headers[i].style.display = 'none'; 
            }
          }
        } else {
          alert("Index " + index + " doesn't exist. Available : 0 - " + this.total); 
        }
    }
    paragraph(index){
        if(index >= 0 && index <= this.total) {
          this.stop();
          for (let i = 0; i <= this.total; i++){
            if (i === index) {
              this.paragraphs[i].style.display = "inline-block";
            } else {
              this.paragraphs[i].style.display = 'none'; 
            }
          }
        } else {
          alert("Index " + index + " doesn't exist. Available : 0 - " + this.total); 
        }
    }
}



//place all variables for Carousels down here

 
const carouselImages4 =  new Carousel("images-4");

console.log(carouselImages4);
