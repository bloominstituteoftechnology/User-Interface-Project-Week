// JS goes here
const pageSections = Array.from(document.querySelector('.container').childNodes);
const subSection = [];
const viewPortHeight = window.innerHeight;
console.log(viewPortHeight);
console.log(pageSections);
for(let i = 0; i<pageSections.length;i++){
  pageSections[i].childNodes.forEach(child =>  {if(child.nodeName!=='#text'){


      subSection.push(pageSections[i]);

      console.log(child.parentNode);

    }});

  }
  console.log(subSection);
  subSection.forEach(section => {
    section.style.opacity = "0";
  });
  let docEl = document.documentElement;
  window.addEventListener('load', function(){
     subSection[0].style.transition="all 1s";
    subSection[0].style.opacity = "1";});

window.addEventListener('scroll', function(){
      subSection.forEach((section,index) =>{

        let rect = section.getBoundingClientRect();
        section.style.transition = "all .5s";
        if(index !==0){

        let distance = rect.top + (window.pageYOffset);
        console.log(distance);
        if(window.pageYOffset >= distance/2){

        section.style.opacity = "1";

      }}
      });


});


//JS for expanded nav

document.querySelector('.nav-btn').addEventListener('click', function(e){
  if(e.target.getAttribute("src")==="img/nav-hamburger-close.png"){
    Array.from(document.querySelectorAll('.menu-layover a')).forEach(link =>link.classList.add('animateLinksFadeIn'));

    Array.from(document.querySelectorAll('.menu-layover a')).forEach(link =>link.classList.add('animateLinksFadeOut'));
    document.querySelector('.menu-layover').style.opacity = '0';
    document.querySelector('.menu-layover').classList.remove('animateLayoverDown');
    document.querySelector('.menu-layover').classList.add('animateLayoverUp');
    e.target.setAttribute("src", "img/nav-hamburger.png");




    document.querySelector('.nav-btn').style["transition-duration"] = "1s";

    document.querySelector('.nav-btn').style.transform = "rotate(0)";

  }else{
    Array.from(document.querySelectorAll('.menu-layover a')).forEach(link =>link.classList.remove('animateLinksFadeOut'));

    Array.from(document.querySelectorAll('.menu-layover a')).forEach(link =>link.classList.add('animateLinksFadeIn'));

    document.querySelector('.nav-btn').style["transition-duration"] = "1s";

    e.target.style.transform = "rotate(-90deg)";

    document.querySelector('.menu-layover').classList.remove('animateLayoverUp');
    document.querySelector('.menu-layover').classList.add('animateLayoverDown');
    document.querySelector('.menu-layover').style.display = "flex";
    document.querySelector('.menu-layover').style.opacity = ".95";
    e.target.setAttribute("src", "img/nav-hamburger-close.png");


  }
});


//JS for Services Tab navigatorTabs
class Tab{
  constructor(tab){
    this.tab = tab;
    this.data = this.tab.dataset.tab;
    console.log(this.data);
    this.content = new TabContent(document.querySelector(`.navContent[data-tab="${this.data}"]`));
    this.tab.addEventListener('click', () => this.select());
  }
  select(){
    Array.from(tabs).forEach(tab=>{
      tab.classList.remove('selected');
    });
    this.tab.classList.add('selected');
    this.content.showContent();
  }
}

class TabContent{
  constructor(tabContent){
    this.tabContent = tabContent;
  }

  showContent(){
    const tabContent = document.querySelectorAll('.navContent');
    Array.from(tabContent).forEach(tabContent => tabContent.classList.remove('navContSelected'));
    this.tabContent.classList.add('navContSelected');
  }
}


const tabs = document.querySelectorAll('.tab');
console.log(tabs);
tabs.forEach(tab => new Tab(tab));

class Carousel {
  constructor(carousel){
    this.carousel = carousel;
    console.log(this.carousel);
    this.images = this.carousel.querySelectorAll('img');
    this.index = 0;
    this.current = new CarouselImage(this.images);
    this.leftButton = this.carousel.querySelector('.left-button');
    this.rightButton = this.carousel.querySelector('.right-button');
    this.leftButton.addEventListener('click', (e) => this.displayImage(e));
    this.rightButton.addEventListener('click', (e) => this.displayImage(e));
  }
  displayImage(e){
    if(e.target.className=='right-button'){
      if(this.index<this.images.length-1){
        this.index +=1;
      }
      else{
        this.index = 0;

      }
    }
    if(e.target.className=='left-button'){
      if(this.index>0){
        this.index -=1;
      }
      else{
        this.index = this.images.length-1;
      }
    }

    this.current.displayNewImage(this.index);

  }
}

class CarouselImage{
  constructor(images){
    this.images = images;
    this.images[0].style.display = "block";


  }
  displayNewImage(index){
    Array.from(this.images).forEach(image => image.style.display = "none");
    this.images[index].style.display = "block";
  }
}

let carousel = document.querySelector('.carousel');
let carouselObject = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
