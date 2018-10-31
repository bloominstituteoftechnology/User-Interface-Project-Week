//home page

let hamImages = document.querySelectorAll(".hamburger img");
let expanded = document.querySelector('.hamburger-expanded');
hamImages.forEach(x => {
    x.addEventListener('click', () => {
        hamImages[0].classList.toggle('hide');
        hamImages[1].classList.toggle('hide');
        expanded.classList.toggle('hide');
    })
    x.addEventListener('mouseenter', () => {
        hamImages[0].style.cursor = 'pointer';
        hamImages[1].style.cursor = 'pointer';
    })
});
expanded.querySelectorAll('a').forEach(x => {
    x.addEventListener('mouseenter', () => {
        x.classList.add('hover');
    })
    x.addEventListener('mouseleave', () => {
        x.classList.remove('hover');
    });
});


//services page

class Tabs {
    constructor(tabs) {
        this.tabs = tabs
        this.links = Array.from(this.tabs.querySelector('.tab-links').querySelectorAll('.tab-link')).map(x => new Link(x));
        this.links.forEach(x => {
            x.link.addEventListener('mouseenter', (event) => {
                event.target.style.cursor = 'pointer';
                x.link.classList.add('hover');
            });
            x.link.addEventListener('mouseleave', (event) => {
                x.link.classList.remove('hover');
            });
            x.link.addEventListener('click', () => {
                x.link.classList.remove('hover');
                this.links.forEach(x => x.content.classList.add('hide'));
                this.links.forEach(x => x.link.classList.remove('clicked'));
                x.select();
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

let tabs = document.querySelector('.tabs');
tabs = new Tabs(tabs);