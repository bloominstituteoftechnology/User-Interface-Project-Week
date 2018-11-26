//services page

class Tabs {
    constructor(tabElement) {
        this.tabElement = tabElement;
        
        // convert array-like to array list
        this.links = Array.from(this.tabElement.querySelector('.tab-links').querySelectorAll('.tab-link')).map(newTab => new Link(newTab));
        
        // mouse hover over when cycle through each new tab link.
        this.links.forEach(mouseHover => {
            mouseHover.link.addEventListener('mouseenter', (event) => {
                event.target.style.cursor = 'pointer';
                mouseHover.link.classList.add('hover');
            });
            mouseHover.link.addEventListener('mouseleave', (event) => {
                mouseHover.link.classList.remove('hover');
            });
            mouseHover.link.addEventListener('click', () => {
                mouseHover.link.classList.remove('hover');
                
                // cycle through each tab when clicked and hide previous tab
                this.links.forEach(hideTab => hideTab.content.classList.add('hide'));
                this.links.forEach(removeTab => removeTab.link.classList.remove('clicked'));
                
                // select method created from below
                mouseHover.select();
            });
        });
        this.links[0].select();
    }
}

class Link {
    constructor(link) {
        this.link = link;
        this.data = this.link.dataset.tab;
        this.content = document.querySelector(`.tab-content[data-tab='${this.data}']`);
    }
    select() {
        this.link.classList.add('clicked');
        this.content.classList.remove('hide');
    }
}


//home page

let hamburgerImages = document.querySelectorAll(".hamburger img");
let hamburgerExpanded = document.querySelector('.hamburger-expanded');

hamburgerImages.forEach(selectImg => {
    selectImg.addEventListener('click', () => {
        hamburgerImages[0].classList.toggle('hide');
        hamburgerImages[1].classList.toggle('hide');
        hamburgerExpanded.classList.toggle('hide');
    })
    
    selectImg.addEventListener('mouseenter', () => {
        hamburgerImages[0].style.cursor = 'pointer';
        hamburgerImages[1].style.cursor = 'pointer';
    })
});
// Micky mouse hand hover when menu expanded
hamburgerExpanded.querySelectorAll('a').forEach(expandMenu => {
    expandMenu.addEventListener('mouseenter', () => {
        expandMenu.classList.add('hover');
    })
    expandMenu.addEventListener('mouseleave', () => {
        expandMenu.classList.remove('hover');
    });
});

let tabs = document.querySelector('.tabs');
tabs = new Tabs(tabs);


