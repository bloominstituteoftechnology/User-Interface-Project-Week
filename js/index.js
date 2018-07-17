// JS goes here
// Navbar

const hamButton = document.querySelector('.ham-button');
const hamButtonClose = document.querySelector('.ham-button-close');
const mainNav = document.querySelector('.main-nav');

const openNav = function() {
  mainNav.classList.add('main-nav-show');
  hamButton.style.display = 'none';
  hamButtonClose.style.display = 'block';
}

const closeNav = function () {
  mainNav.classList.remove('main-nav-show');
  hamButton.style.display = 'block';
  hamButtonClose.style.display = 'none';
}

hamButton.addEventListener('click', ()=> {
  TweenLite.to(mainNav, 1, {
    opacity: 1,
    ease: Power1.easeInOut,
    onComplete: openNav()
  })
});

hamButtonClose.addEventListener('click', ()=> {
  TweenLite.to(mainNav, 1, {
    opacity: 0,
    ease: Power1.easeInOut,
    onComplete: closeNav
  })
});

// Tab

class Tabs {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll('.tab');
    this.links = Array.from(this.links).map( link => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() { 
    this.activeLink.select();
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
  }

  getTab(data) {
    return document.querySelector(`.content[data-tab="${data}"]`);
  }

}

class TabsLink {
  constructor(link, parent) {
    this.link = link;
    this.tabs = parent;
    this.tabsItem = parent.getTab(this.link.dataset.tab);
    this.tabsItem = new TabsItem(this.tabsItem);
    this.link.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.link.classList.add('tab-active');
    this.tabsItem.select();
  }

  deselect() {
    this.link.classList.remove('tab-active'); 
    this.tabsItem.deselect();
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('content-active');
  }

  deselect() {
    this.element.classList.remove('content-active');
  }
}

let tabs = document.querySelectorAll('.services-tabs');
tabs = Array.from(tabs).map(tab => new Tabs(tab));

//Carousel

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
  }
  makeHidden(){
    this.picture.classList.remove('active-picture');
    this.description.classList.remove('active-description');
  }
}

let pics = document.querySelectorAll('.pictures');

pics = Array.from(pics).map(picture => new Pictures(picture));

// Animations
window.addEventListener('load', () => TweenLite.to('.jumbotron .jumbotron-text', 1, {opacity: 1, left: "9%"}));
window.addEventListener('load', () => TweenLite.to('.p-jumbotron .jumbotron-text', 1, {opacity: 1, left: "9%"}));

let animatedPictures = document.querySelectorAll('.home .main-content img');
animatedPictures.forEach(picture => {
  picture.addEventListener('mouseover', () => TweenLite.to(picture, 1, {scale:1.1, ease: 'Linear'}));
  picture.addEventListener('mouseout', () => TweenLite.to(picture, 1, {scale: 1, ease:'Linear'}));
});

let animatedButtons = document.querySelectorAll('.home .main-content .content-box button');
animatedButtons.forEach(button => {
  button.addEventListener('mouseover', () => TweenLite.to(button, 0.5, {backgroundColor:"#222222", color:"white", boxShadow:"0px 0px 20px 2px #636e72"}));
  button.addEventListener('mouseout', () => TweenLite.to(button, 0.5, {backgroundColor:"white", color:"black", boxShadow:"0px 0px 0px 0px"}));
});



//