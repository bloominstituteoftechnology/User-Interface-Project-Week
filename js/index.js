// JS goes here

const hamButton = document.querySelector('.ham-button');
const hamButtonClose = document.querySelector('.ham-button-close');
const mainNav = document.querySelector('.main-nav');

hamButton.addEventListener('click', () => {
	mainNav.classList.add('main-nav-show');
	hamButton.style.display = 'none';
	hamButtonClose.style.display = 'block';
});

hamButtonClose.addEventListener('click', ()=> {
	mainNav.classList.remove('main-nav-show');
	hamButton.style.display = 'block';
	hamButtonClose.style.display = 'none';
});

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
  }

  makeVisible(){
    this.picture.classList.add('active-picture');
  }
  makeHidden(){
    this.picture.classList.remove('active-picture');
  }
}


let pics = document.querySelectorAll('.pictures');

pics = Array.from(pics).map(picture => new Pictures(picture));