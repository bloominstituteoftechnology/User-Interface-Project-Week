// JS goes here
// Home JS Navigation
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('header.header');
let open = hamburger.addEventListener('click', () => {

    
    if (header.classList.contains('navigation-show')) {
        hamburger.classList.remove("is-active");
    TweenMax.to(header, .4, {height:'50px', ease:Power2.easeIn, onComplete: () => {
        header.classList.remove('navigation-show');
        navigation.classList.remove('navigation-show');
    }});

    TweenMax.fromTo(navigation, .3, {opacity: '1'}, {opacity: '0', ease:Power2.easeIn});

    // hamburger.src='img/nav-hamburger.png';
    // hamburger.alt='Open Menu';

    } else {
        hamburger.classList.add("is-active");
        navigation.classList.add('navigation-show');
        header.classList.add('navigation-show');
    TweenMax.to(header, .4, {height:'100%', ease:Power3.easeOut, onComplete: () => {
    }});

    TweenMax.fromTo(navigation, .3, {opacity: '0'}, {opacity: '1', ease:Power3.easeOut});
    // hamburger.src='img/nav-hamburger-close.png';
    // hamburger.alt='Close Menu';
    }
});

// Tabs
class TabMenuItem {
  constructor(item) {
      this.item = item;
      this.data = this.item.dataset.tab;
      this.tabContainer = document.querySelector('.content-tabs');
      this.item.addEventListener('click', () => this.tabSelect());
      this.content = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
  }

  tabSelect() {
      document.querySelectorAll(".tab").forEach(tabContent => tabContent.classList.remove("active"));
      this.item.classList.add("active");
      TweenMax.to(this.tabContainer, .25, {opacity: 0, ease:Sine.easeIn, onComplete: () => {
          document.querySelectorAll(".tab-content").forEach(tabContent => tabContent.classList.remove("active"));
          this.content.classList.add("active");
          TweenMax.to(this.tabContainer, .25, {opacity: 1, ease:Sine.easeOut});
      }});
  }
}

let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new TabMenuItem(tab));
tabs[0].tabSelect();











