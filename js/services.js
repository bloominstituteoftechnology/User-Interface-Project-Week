//nav
let menu = document.querySelector('.hamburger');
let navLinks = document.querySelector('.links');
let xMark = document.querySelector('.x-mark')

function expand() {
        menu.classList.toggle('hide');
        navLinks.classList.toggle('hide');
        xMark.classList.toggle('hide');
        TweenMax.to('.links', 2, {opacity: 1})
};

menu.addEventListener('click', () => {expand()});
xMark.addEventListener('click', () => {expand()});


//Services-page
class TabLink {
    constructor(element){

      this.element = element;

      this.tabData = this.element.dataset.tab; 

      this.output = document.querySelector(`.output[data-tab="${this.tabData}"]`);

      this.element.addEventListener('click', () => {this.selectTab()});
    }
  
    selectTab(){
  
      const tabs = document.querySelectorAll('.output');
      Array.from(tabs);

      tabs.forEach(function(tab) {
        tab.classList.remove('show');
      })

      this.output.classList.add('show');
      TweenMax.fromTo('.output-img', 2, {x:500}, {x:0});
    }
}

let tabs = document.querySelectorAll('.tab-link');

tabs = Array.from(tabs).map(tab => new TabLink(tab));

//Once you are complete, call the .select method on the first tab
tabs[0].selectTab();