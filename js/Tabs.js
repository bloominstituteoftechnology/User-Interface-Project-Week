// Tabs

class Tabs {
    constructor(tabs) {
      this.tabs = tabs;
      // create a reference to the ".tabs-link" class nested in your tab object
      this.links = this.tabs.querySelectorAll('.tab');
      // map over the array creating new TabsLink class instances of each link
      this.links = Array.from(this.links).map(link => {
        return new TabsLink(link, this);
      });
      // Set the active link to the first item in the array
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
  
    getHeading(data) {
      return this.tabs.querySelector(`.tab-heading[data-tab="${data}"]`);
    }
    getImg(data) {
        return this.tabs.querySelector(`.tab-img[data-tab="${data}"]`);
    }
  }
  
  class TabsLink {
    constructor(link, parent) {
      this.link = link;
      this.tabs = parent;  
      this.tabHeading = parent.getHeading(this.link.dataset.tab);
      this.tabHeading = new TabsHeading(this.tabHeading);
      this.tabImg = parent.getImg(this.link.dataset.tab);
      this.tabImg = new TabsImg(this.tabImg);
      this.link.addEventListener('click', () => {
        this.tabs.updateActive(this);
        this.select();
      });
    };
  
    select() {
      this.link.classList.add('tab-selected');
      this.tabHeading.select();
      this.tabImg.select();
    }
  
    deselect() {
      this.link.classList.remove('tab-selected');
      this.tabHeading.deselect();
      this.tabImg.deselect();
    }
  }
  
  class TabsHeading {
    constructor(heading) {
      this.heading = heading;
    }
  
    select() {
      this.heading.classList.add('tab-heading-selected');
    }
  
    deselect() {
      this.heading.classList.remove('tab-heading-selected');
    }
  }
  
  class TabsImg {
      constructor(img) {
        this.img = img;
      }
  
      select() {
        this.img.classList.add('tab-img-selected');
      }
  
      deselect() {
        this.img.classList.remove('tab-img-selected');
      }
  }
  
  let tabs = document.querySelectorAll('.tabs');
  // map through each tabs element and create a new Tabs object.
  tabs = Array.from(tabs).map(tab => new Tabs(tab));