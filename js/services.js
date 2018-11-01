//  // JS goes here //  //

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



// //              //  //******************************************************************************
class ContentLink {
    constructor(block) {
        this.block = block;

        this.btnData = this.block.dataset.tab;

        this.fourBoxSection = document.querySelector(`.fourBox[data-tab="${this.btnData}"]`);

        // this.fourBoxSection = Array.from(this.fourBoxSection).map(one => new ContentBoxGroup(one));
        this.fourBoxSection = new ContentBoxGroup(this.fourBoxSection);

        this.block.addEventListener('click', (e) => { this.btnClicked(e) });
    }

    btnClicked(e) {
        const fourBoxSectionsAll = document.querySelectorAll('.btnS');

        fourBoxSectionsAll.forEach(one => { one.classList.remove('activeSection'); })

        // const boxSections = document.querySelectorAll('.fourBox');

        // boxSections.forEach(one => one.style.display = 'none');


        this.block.classList.add('activeSection');
        this.fourBoxSection.pickBox();


        // this.fourBoxSection.forEach(one => one.pickBox());

    }
}

class ContentBoxGroup {
    constructor(block) {
        this.block = block;

    }
    pickBox() {

        const fourBoxSection = document.querySelectorAll('.fourBox');
        fourBoxSection.forEach(one => {
            one.classList.remove('activeSection');
        })
        this.block.classList.add('activeSection');


        // console.log('Looking At:' + this.block);
        //  console.log ('A type of: ', typeof this.block);






    }
}









let bttnbttn = document.querySelectorAll('.btnS');

bttnbttn = Array.from(bttnbttn).map(these => { return new ContentLink(these); });

// console.log('Looking At:' + bttnbttn);
// console.log('A type of: ', typeof bttnbttn);

bttnbttn[0].btnClicked();
//setting the default tab object.



///*****************************************************************************
// console.log('Looking At:'buttons);
// console.log('A type of: ', typeof buttons);
// consol.dir();