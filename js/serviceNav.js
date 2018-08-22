class ImgLink {
    constructor(element){
      this.element = element;
      this.imgData = this.element.dataset.img; 
  
      this.images = document.querySelectorAll(`.menu-content[data-img = "${this.imgData}"]`);
  
      this.images = Array.from(this.images).map(image => new ImgCard(image));
  
      this.element.addEventListener('click', ()=> {this.selectImg()
    });
  }
  
    selectImg(){
      const imgs = document.querySelectorAll('.hamburger-img2');
  
      imgs.forEach(function(item){
        item.classList.remove('display3')
      });
  
      this.element.classList.add('display3');
  
      const images = document.querySelectorAll('.menu-content');
  
      images.forEach(function(item){
        item.style.display = 'none';
      });
  
      this.images.forEach(image => image.selectImage());
    }
  }
  
  class ImgCard {
    constructor(element){
      this.thisElement = element;
    }
    selectImage(){
      this.thisElement.style.display = null;
    }
  
  }
  
  let imgs = document.querySelectorAll('.hamburger-img2');
  imgs = Array.from(imgs).map(img => new ImgLink(img));
  imgs[0].selectImg();