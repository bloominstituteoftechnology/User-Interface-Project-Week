//navbar
class Header{
    constructor(header){
        this.header = header;
        this.navBtn = this.header.querySelector('.nav-button');
        this.nav = this.header.querySelector('nav');
        this.x = false;

        this.navBtn.addEventListener('click', () => this.open());
    }
    open(){
        this.nav.classList.toggle('nav-open');
        this.header.classList.toggle('header-open');
        if(this.x){
            this.navBtn.textContent = "☰";
            this.x = false;
        }else{
            this.navBtn.textContent = "✖";
            this.x = true;
        }
        
    }
}


let header = document.querySelector('header');
header  = new Header(header);


//services tabs ========================================

class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.content[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);

      this.element.addEventListener('click', () =>  this.select() );
  
    }
    select() {
        const links = document.querySelectorAll('.tabs-link');
        Array.from(links).forEach( link => link.classList.remove('tabs-link-selected'));
        this.element.classList.toggle('tabs-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
        const items = document.querySelectorAll('.content');
        Array.from(items).forEach( item => item.classList.remove('content-selected'));
        this.element.classList.toggle('content-selected');
        // TweenMax.from(".tabs-item-selected", 1.5, {y: 50, opacity: 0});
    }
  }

let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map( link => new TabLink(link));

links[0].select();



//===Carousel=========================

class Carousel {
    constructor(element){
        this.element = element;
        console.log(element);
        
        this.leftBtn = this.element.querySelector('.left-button');
        this.rightBtn = this.element.querySelector('.right-button');
        console.log(this.rightBtn);
        this.currentIndex = 0;

        this.images = Array.from(element.querySelectorAll('.carousel-img'))

        this.images[0].style.display = "block";

        this.leftBtn.addEventListener('click', () => this.leftImage());
        this.rightBtn.addEventListener('click', () => this.rightImage());
    }
    leftImage(){
        TweenMax.fromTo(this.images[this.currentIndex], 1, {opacity : 1},{opacity:0});
        if(this.currentIndex < 1)
            this.currentIndex = this.images.length ;
        this.currentIndex--;
        this.images.forEach((img) => img.style.display = "none");
        this.images[this.currentIndex].style.display = "block";
        TweenMax.fromTo(this.images[this.currentIndex], 2, {opacity : 0},{opacity:1});
        
    }
    rightImage(){
        TweenMax.fromTo(this.images[this.currentIndex], 1, {opacity : 1},{opacity:0});
        if(this.currentIndex >= this.images.length -1)
            this.currentIndex = -1;
        this.currentIndex++;
        this.images.forEach((img) => img.style.display = "none");
        this.images[this.currentIndex].style.display = "block";
        TweenMax.fromTo(this.images[this.currentIndex], 2, {opacity : 0},{opacity:1});
        
    }

}


let carousel = document.querySelector('.carousel');
carousel = new Carousel( carousel);
