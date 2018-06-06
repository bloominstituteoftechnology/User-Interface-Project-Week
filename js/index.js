// JS goes here

//NAVBAR SCROLLTOP
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

// $('.carousel').carousel({
//   interval: 2000
// })
});


//NAVBAR TOGGLE HAMBURGER

let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".nav-btn");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener('click', function() {
  overlay.style.display = "block";
});

closeBtn.addEventListener('click', function() {
  overlay.style.display = "none";
});


//SERVICES PAGE - TAB NAVIGATION
class Tabs {
  constructor(element){
    this.element = element;
    this.tabs = this.element.querySelectorAll(".tab");
    this.tabs = Array.from(this.tabs).map( tab => new TabLink(tab, this));
    this.activeTab = this.tabs[0];
    this.init();
  }

  init(){
    this.activeTab.selectTab();
  }

  updateActive(tabElement){
    this.activeTab.deselectTab();
    this.activeTab = tabElement;
  }

  getCards(data){
    if(data === 'all') {
      return document.querySelectorAll(".card");
    } else {
      return document.querySelectorAll(`.card[data-tab="${data}"]`);
    }
  }
}

class TabLink {
  constructor(element, parent){
    this.element = element;
    this.parent = parent;
    this.cards = this.parent.getCards(this.element.dataset.tab);
    this.cards = Array.from(this.cards).map( card => new TabCard(card));
    this.element.addEventListener('click', () => {this.selectTab()});
  }

  selectTab(){
    this.parent.updateActive(this);
    this.element.classList.add(".active-tab");
    this.cards.forEach( card => card.selectCard());
  }

  deselectTab(){
    this.element.classList.remove(".active-tab");
    this.cards.forEach( card => card.deselectCard());
  }
}

class TabCard {
  constructor(element){
    this.element = element;
  }
  selectCard(){
    this.element.setAttribute('style','display:null');
  }
  deselectCard(){
   this.element.setAttribute('style','display:none');
  }
}


let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map( tab => new Tabs(tab));
