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
    }
}

let tabs = document.querySelectorAll('.tab-link');

tabs = Array.from(tabs).map(tab => new TabLink(tab));

//Once you are complete, call the .select method on the first tab
tabs[0].selectTab();

//faq tab

class FaqLink {
    constructor(element){

      this.element = element;

      this.tabData = this.element.dataset.tab;
      
      this.answer = document.querySelector(`.answer[data-tab="${this.tabData}"]`);

      this.element.addEventListener('click', () => {this.selectFaq()});
    }
  

    selectFaq() {
    
        this.answer.classList.toggle('hide');
    }
}


let faqs = document.querySelectorAll('.faqs');

faqs = Array.from(faqs).map(faq => new FaqLink(faq));

const submit = document.querySelector('.submit');
const content = document.querySelector('.contact-form');
const contactSubmitted = document.querySelector('.contact-submitted');

submit.addEventListener('click', function() {
    content.classList.add('hide');
    contactSubmitted.classList.remove('hide');

    const name = document.getElementById('name');

    const app = new Vue({
        el: '#app',
        data: {
            name: 'Matt'
        }
    })
});

