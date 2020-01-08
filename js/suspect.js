const menuO = document.querySelector('.open');
const menuC = document.querySelector('.close');
const bottom = document.querySelector('.bottom');
let menuI = document.querySelectorAll('.bottom a')
let tabs = document.querySelectorAll('.suspect-nav-button')
let leftarrow = document.querySelector('.left-arrow');
let rightarrow = document.querySelector('.right-arrow');
const sections = document.querySelectorAll('.tab');


const classes = ['gender','race','height','weight', 'age', 'hair', 'face', 'unique'];
let index = 0;
let selected = classes.filter(item => classes.indexOf(item) === index)[0]


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

const getSecMobile = () => {
    
  const selectSec = document.querySelector('.visible');
  selectSec.classList.remove("visible");
  sections.forEach(function(section) {
      section.classList.add("invisible");}
  )  
}

const changeSec = (arrow) => {
            if (arrow === 'right' && index !== 7) {
                index++;
            }

            else if (arrow === 'right' && index === 7) {
                index = 0;
            }

            else if (arrow === 'left' && index === 0) {
                index = 7;
            }

            else if (arrow === 'left' && index !== 0) {
                index--;
            }

            const selectSec = document.querySelector('.visible');
            selectSec.classList.remove("visible");
            sections.forEach(function(section) {
                section.classList.add("invisible");}
            )
            selected = classes.filter(item => classes.indexOf(item) === index)[0]
            sections.forEach(function(section) {
                for (let i = 0;i<classes.length;i++) {
                if (section.classList.contains(selected))
                {section.classList.remove('invisible');
                section.classList.add("visible");
  }
            }}
            );
    }



menuO.addEventListener('click',function() {MenuO()})

menuC.addEventListener('click',function() {MenuC()})


bottom.addEventListener('mouseleave',function() {MenuC()})

leftarrow.addEventListener('click',function() {
    changeSec('left')

})

rightarrow.addEventListener('click',function() {
    changeSec('right')
})
