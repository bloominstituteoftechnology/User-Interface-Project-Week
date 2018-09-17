// JS goes here

/***************************************
 * TOGGLE THE NAVIGATION DROPDOWN MENU *
 * **************************************/

//grab nav button div
const navButton = document.querySelector('.nav-button');

//grab images within nav button
const navImages = navButton.querySelectorAll('img');

//grab dropdown nav element
const navDropdown = document.querySelector('.nav-dropdown');

//grab anchor tags - for use when giving default focus to link
const navLinks = document.querySelectorAll('.nav-anchor a');

//grab body element - used to hide scollbars
const body = document.querySelector('body');

//clickHandler for navButton
const navButtonHandler = function(event){
    // display correct menu button image
    // navImages.forEach(function(img){
    //     img.classList.toggle("hide-nav");
    // });
    if(navImages[0].className === 'hide-nav'){
        TweenMax.to(navImages[0], .4, { css: { className: "" } });
    }else {
        TweenMax.to(navImages[0], .1, { css: { className: "hide-nav" } });
    }
    if(navImages[1].className === 'hide-nav'){
        TweenMax.to(navImages[1], .4, { css: { className: "" } });
    }else {
        TweenMax.to(navImages[1], .1, { css: { className: "hide-nav" } });
    }

    //Toggle nav dropdown
    // navDropdown.classList.toggle('hide-nav');
    if (navDropdown.className === 'nav-dropdown hide-nav') {
        TweenMax.to(navDropdown, .2, { css: { className: "-=hide-nav",left: null }, ease: Power2.easeOut});
        // navDropdown.style.position = 'relative';
    } else {
        TweenMax.to(navDropdown, .2, { css: { className: "+=hide-nav", left: null}, ease: Power2.easeOut});
    }

    //set default focus on correct link
    navLinks.forEach(function(link){
        if(link.textContent === navButton.dataset.id){
            link.style.color = '#222222';
        }
    });

    //toggle scrollbars hidden
    body.classList.toggle('hide-scroll');
}

//Add event listenter to nav button
navButton.addEventListener('click', navButtonHandler);

//**************************************************************/

/***********************************************************
 * TAB NAVIGATOR COMPONENT FOR SERVICES.HTML
 *********************************************************/

class tabLink{
    constructor(element){
        this.element = element;
        this.id = this.element.dataset.id;
        this.card = document.querySelector(`.navigator-card[data-id="${this.id}"]`);
        this.card = new navCard(this.card);

        this.element.addEventListener('click', () => {this.selectLink()});
    }

    //event handler for tabLink click
    selectLink(){
        /*****show card associated with link */
        //grab all cards
        const cards = document.querySelectorAll('.navigator-card');
        //hide all before displaying correct one
        cards.forEach(function(card_el){
            card_el.classList.remove('show-card');
        });
        //display card associated with clicked link
        this.card.showCard();

        //***handle styling of links */
        //grab all links
        const links_el = document.querySelectorAll('.button-link');
        console.log(links_el);
        //make sure all links have default style
        links_el.forEach(function(link_el){
            link_el.classList.remove('clicked-link');
        });
        //style the clicked link
        console.log(this.element);
        this.element.style.outline = 'none'; //remove default bluish outline on button element
        this.element.classList.add('clicked-link');

    }
}

class navCard{
    constructor(element){
        this.element = element;

    }

    showCard(){
        this.element.classList.add('show-card');
    }
}


//create tabLinks objects array
const tabLinks_el = document.querySelectorAll('.navigator-links .button-link');
const tabLinkObjects = Array.from(tabLinks_el).map(function(button_link){
    return new tabLink(button_link);
});



