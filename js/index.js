// JS goes here

//-----------------------------Tabs on Services---------------//

class Tabs {
    constructor(element) {
        this.element = element;
        this.links = this.element.querySelectorAll('.tabs-link');
        this.links = Array.from(this.links).map(link => {
            return new TabsLink(link, this);
        });
        this.activeLink = this.links[0];
        this.init();
    }

    init() {
        this.activeLink.select()
    }

    updateActive(newActive) {
        this.activeLink.deselect();
        this.activeLink = newActive;
    }

    getTab(data) {
        return this.element.querySelector(`.tabs-item[data-tab="${data}"]`)
    }

}

class TabsLink {
    constructor(element, parent) {
        this.element = element;
        this.tabs = parent;
        this.tabsItem = parent.getTab(this.element.dataset.tab);
        this.tabsItem = new TabsItem(this.tabsItem);
        this.element.addEventListener('click', () => {
            this.tabs.updateActive(this);
            this.select()
        });
    };

    select() {
        this.element.classList.add('tabs-link-selected')
        this.tabsItem.select();
    }

    deselect() {
        this.element.classList.remove('tabs-link-selected');
        this.tabsItem.deselect();
    }
}

class TabsItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add('tabs-item-selected');
    }

    deselect() {
        this.element.classList.remove('tabs-item-selected');
    }
}

function debounce(callback, wait = 20, immediate = true) {
    let timeout = null 
    
    return function() {
      const callNow = immediate && !timeout
      const next = () => callback.apply(this, arguments)
      
      clearTimeout(timeout)
      timeout = setTimeout(next, wait)
  
      if (callNow) {
        next()
      };
    };
};


let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map(tab => new Tabs(tab));

//-------------------------NavBar------------------//




let navBar = document.querySelector('.navigation');

function checkSlide(e) {
    console.log(scrollY);
    console.log(navBar);
    if (scrollY > 340 ) {
        navBar.style.background = "#828282";
        navBar.style.opacity = "0.85"
    } else {
        navBar.style.background = "";
        navBar.style.opacity = ""
    }
    
}
// var checkSlide = (e) => console.log(e);


window.addEventListener('scroll', checkSlide);






// document.addEventListener("scroll", (e) => {
//     navBar.style.background = "#828282";
//     navBar.style.opacity = "0.9";
// });



//--------------------- Scroll Bar Gray ---------------//

// window.onscroll = function() {scrollNav()}

// let navi = document.getElementsByClassName("navigation");
// let down = navi.offsetTop;

// function scrollNav () {
//     if (window.pageYOffset >= down) {
//         navi.classList.add("grayNav");
//     }
//     else {
//         navi.classList.remove("grayNav")
//     }
// }
// let nav = document.querySelector('.navigation');

// window.addEventListener('scroll', navScroll);

// function navScroll() {
//     if(window.scrollY === 0) {
//         nav.classList.remove('.gray');
//     } else {
//         nav.classList.add('.gray');
//     }
// }

