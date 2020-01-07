const menuO = document.querySelector('.open');
const menuC = document.querySelector('.close');
const bottom = document.querySelector('.bottom');
let menuI = document.querySelectorAll('.bottom a')
let tabs = document.querySelectorAll('.suspect-nav-button')

console.log(tabs);

class ItemLink {
    constructor(element){
        this.element = element;

        this.element.addEventListener('mouseover', () => {this.element.style.color = 'black';});
        this.element.addEventListener('mouseout', () => {this.element.style.color = 'white';});

      }
}

class Section {
    constructor(element){
        this.element = element;
      }
}

class TabLink {
    constructor(element){
        let sections = document.querySelectorAll('.tab')
        sections = Array.from(sections).map((item) => {return new Section(item)});
        

        this.element = element;

        this.element.addEventListener('click', () => {
            let navs = document.querySelectorAll('.suspect-nav-button');
            [...navs].map(nav => {return nav.classList.remove('clicked')})
            this.element.classList.add('clicked')
           this.getSec(); 
        })
      }

      getSec() {
          const element = this.element;
          
        const sections = document.querySelectorAll('.tab');

        sections.forEach(function(section) {
            section.classList.add("invisible");}
        )


        sections.forEach(function(section) {
            const classes = ['gender','race','height','weight', 'age', 'hair', 'face', 'unique'];
            for (let i = 0;i<classes.length;i++) {
            if (section.classList.contains(classes[i]) && element.classList.contains(classes[i]))
            {section.classList.remove('invisible');
            section.classList.add("visible");}
        }}
        )
        
      }
}


menuI = Array.from(menuI).map((item) => {return new ItemLink(item)});
tabs = Array.from(tabs).map((item) => {return new TabLink(item)} )

function MenuO () {
        menuO.style.display = 'none';
        menuC.style.display = 'block';
        bottom.style.display = 'flex';
 
}

function MenuC () {
    menuC.style.display = 'none';
    menuO.style.display = 'block';
    bottom.style.display = 'none';

}


menuO.addEventListener('click',function() {MenuO()})

menuC.addEventListener('click',function() {MenuC()})


bottom.addEventListener('mouseleave',function() {MenuC()})
