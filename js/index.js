// JS goes here


const navButton = document.querySelector('.burger-button');
const menu = document.querySelector('.expanding-menu');
let buttonImgs = navButton.querySelectorAll('img');
const aTags = Array.from(menu.querySelectorAll('a'));
const footer = document.querySelector('footer');
const body = document.querySelector('body');
const scrollBoxs = Array.from(document.querySelectorAll('.onScroll'));

//Navigation Button----------------------------------------------------
navButton.addEventListener('click',()=>{
    // menu.classList.toggle('hidden');
    buttonImgs[0].classList.toggle('current-btn');
    buttonImgs[1].classList.toggle('current-btn');

    if(!menu.classList.contains('hidden')){
        setTimeout(()=>aTags.forEach(tag => tag.style.display = 'none'),200);

        TweenMax.to(menu,0.6,{height: 0, onComplete: ()=> {
            menu.removeAttribute('style');
            menu.classList.toggle('hidden');
            buttonImgs[1].classList.remove('current-btn');
            buttonImgs[0].classList.add('current-btn');
            aTags.forEach(tag => tag.removeAttribute('style'));
        }});
    }

    else{
        menu.classList.toggle('hidden');
        TweenMax.from(menu,0.6,{height: 0, ease: Power2.easeOut, onComplete: () => {
            menu.removeAttribute('style');
            buttonImgs[0].classList.remove('current-btn');
            buttonImgs[1].classList.add('current-btn');           
        }});
    }
});
//End of Nav Button-----------------------------------------------------

//Tab setup-----------------------------------------------------------
class Tab {
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
        this.content = document.querySelector(`.tab-content[data-tab='${this.data}']`);
        this.tabContent = new TabContent (this.content);

        this.element.addEventListener('click',()=>this.select());
    };
    select() {
        // remove tab-selected class from all tabs
        let tabs = document.querySelectorAll('.tab');
        Array.from(tabs).forEach(tab => tab.classList.remove('selected-tab'));
        this.element.classList.add('selected-tab');
        this.tabContent.select();
    }
}
class TabContent {
    constructor(banana){
        this.element = banana;
        this.children = this.element.children;
    }
    select () {
        let contentList = document.querySelectorAll('.tab-content');
        Array.from(contentList).forEach(content=>{
            content.classList.remove('selected-content');
            Array.from(content.children).forEach(child => {
                child.style.opacity = 0;
            })
        });
        this.element.classList.add('selected-content');
        Array.from(this.children).forEach( child => {
            TweenMax.to(child, 2, {opacity: 1});
        });
        // TweenMax.to(this.element, 2, {opacity: 1});
    }
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(tab => new Tab(tab));
//end tab setup--------------------------------------------------------------


// scrolling event setup------------------------------------------------------



window.addEventListener('scroll',(event)=>{
  let windowHeight = document.documentElement.clientHeight;
  scrollBoxs.forEach(item => {
    if(item.getBoundingClientRect().top < windowHeight-100 && item.getBoundingClientRect().bottom > 0){
      TweenMax.to(item, 2, {opacity: 1, onComplete: ()=> {
          item.removeAttribute('style');
      }});
    }
    else{
      item.style.opacity = 0;
    }
})});
//scroll event end-------------------------------------------------------------

//do the same thing as scroll event but on loading of page---------------------
window.addEventListener('load', (event)=>{
    let windowHeight = document.documentElement.clientHeight;
    scrollBoxs.forEach(item => {
        item.style.opacity = 0;
      if(item.getBoundingClientRect().top < windowHeight-100 && item.getBoundingClientRect().bottom > 0){
        TweenMax.to(item, 2, {opacity: 1, onComplete:()=>{
            item.removeAttribute('style');
        }});
      }
      else{
        item.style.opacity = 0;
      }
    })
    // get rid of 'empty' page below footer if window height > page height
    if (body.getBoundingClientRect().bottom < windowHeight){
        let difference = windowHeight - body.getBoundingClientRect().bottom;
        footer.style.paddingBottom = `${difference+20}px`;
    }

});
//end load event---------------------------------------------------------------

// recalculate the footer bottom when window resized
window.addEventListener('resize',(event)=>{
    let windowHeight = document.documentElement.clientHeight;
    footer.removeAttribute('style');
    if (body.getBoundingClientRect().bottom < windowHeight){
        let difference = windowHeight - body.getBoundingClientRect().bottom;
        footer.style.paddingBottom = `${difference+20}px`;
    }
    scrollBoxs.forEach(item => {
        
      if(item.getBoundingClientRect().top < windowHeight-100 && item.getBoundingClientRect().bottom > 0){
        TweenMax.to(item, 2, {opacity: 1});
      }
      else{
        item.style.opacity = 0;
      }
    })
});



//---image carousel---------------------------------------
class Carousel {
    constructor(carouselEle){
        this.carouselEle = carouselEle;
        this.rightBtn = this.carouselEle.querySelector('.right-button');
        this.leftBtn = this.carouselEle.querySelector('.left-button');
        this.images = this.carouselEle.querySelectorAll('.img-container');
        this.imgIndex = 0;
        this.images[0].classList.add('visible');
        this.leftBtn.addEventListener("click",()=>this.goLeft());
        this.rightBtn.addEventListener("click",()=>this.goRight());
    }
    goLeft(){
        let currentIndex = this.imgIndex;
        if(this.imgIndex <= 0){
            this.imgIndex = this.images.length-1;
        }
        else{
            this.imgIndex--;
        }
        TweenMax.to(this.images[currentIndex],0.5,{opacity:0,ease: Power1.easeIn,onComplete:()=>{
            this.images[currentIndex].classList.remove('visible');
            this.images[currentIndex].removeAttribute("style");
            TweenMax.from(this.images[this.imgIndex],0.5,{opacity:0, ease: Power3.easeIn});
            this.images[this.imgIndex].classList.add('visible');
        }})
    }
    goRight(){
        let currentIndex = this.imgIndex;
        if(this.imgIndex >= this.images.length-1){
            this.imgIndex = 0;
        }
        else{
            this.imgIndex++;
        }
        TweenMax.to(this.images[currentIndex],0.5,{opacity:0,ease: Power1.easeIn,onComplete:()=>{
            this.images[currentIndex].classList.remove('visible');
            this.images[currentIndex].removeAttribute("style");
            TweenMax.from(this.images[this.imgIndex],0.5,{opacity:0,ease: Power3.easeIn});
            this.images[this.imgIndex].classList.add('visible');
        }})
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);