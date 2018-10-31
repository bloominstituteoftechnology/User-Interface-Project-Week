// JS goes here

// const toggleMenu = () => {

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('#burgerOpen');
const menuClose = document.querySelector('#burgerClose');


const menuButton = document.querySelector('.menu-button');

const menuButtons = document.querySelectorAll('.menu-button');

menuButtons.forEach((one) => {
    return one.addEventListener('click', function(event) {
        event.stopPropagation();
        menu.classList.toggle('menu--open');
        menuOpen.classList.toggle('toggleMenu');
        menuClose.classList.toggle('toggleMenu');
    });

});



////********************************************************************** */

//
// ****************************************************************************************
class ContentLink {
    constructor(stuff) {
        this.stuff = stuff;
        this.btnData = ths.stuff.dataset.tab;
        this.fourBoxSection = document.querySelector(
            `.fourBox[data-tab="${this.btnData}"]`
        );

        this.fourBoxSection = Array.from(this.fourBoxSection).map(
            one => new ContentBox(one)
        );

        this.stuff.addEventListener('click', () => {
            this.btnClicked;
        });
    }

    btnClicked() {
        const fourBoxSectionsAll = document.querySelectorAll('.fourBox');

        fourBoxSectionsAll.forEach(one => {
            one.classList.remove('.activeSection');
        });

        const boxSections = document.querySelectorAll('.fourBox');

        boxSections.forEach(one => (one.style.display = 'none'));

        this.stuff.classList.add('.activeSection');

        this.fourBoxSection.forEach(one => one.pickBox());
    }
}

class BoxGroup {
    constructor(thing) {
        this.thing = thing;
    }
    pickBox() {
        this.thing.style.display = 'flex';
    }
}

let buttons = document.querySelectorAll('.btnS');

buttons = Array.from(buttons).map(each => new ContentLink(each));

///*****************************************************************************


// ****************************************************************************************




class Article {
    constructor(domElement) {


        this.domElement = domElement;


        this.expandButton = this.domElement.querySelector('.expandButton')


        this.expandButton.textContent = 'expand';


        this.expandButton.addEventListener('click', () => this.expandArticle(event));

    }

    expandArticle(event) {


        console.log();
        this.domElement.classList.toggle('article-open');

    }
}



let articles = document.querySelectorAll(".article");


articles = Array.from(articles).map((domElement) => { return new Article(domElement); });





// *****************************************************************************************************************