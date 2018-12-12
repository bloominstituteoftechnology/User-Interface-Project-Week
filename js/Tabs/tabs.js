
class TabLink {
    constructor(domElement){
        this.domElement = domElement;
        this.data = this.domElement.dataset.tab;
        this.itemElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`)
        this.itemElementImg = document.querySelector(`.tab-img[data-tab="${this.data}"]`)
        this.domElement.addEventListener('click', () => {this.select()});
        this.items = new TabItems(this.itemElement, this.itemElementImg);
    }

    select() {
        const links = document.querySelectorAll('.tabs-link');
        links.forEach(e => e.classList.remove('tabs-link--selected'))
        this.domElement.classList.add('tabs-link--selected')
        this.items.select()
    }
}

class TabItems {
    constructor(item, img){
        this.item = item;
        this.img = img;
    }

    select(){
        const items = document.querySelectorAll('.tab-item');
        items.forEach(e => e.classList.remove('tab-item--selected'));
        const images = document.querySelectorAll('.tab-img');
        images.forEach(e => e.classList.remove('tab-img--selected'));
        this.item.classList.add('tab-item--selected')
        this.img.classList.add('tab-img--selected')
        TweenLite.from(this.item, .5, {
            opacity: 0,
            ease: Power4.easeIn
        });
        TweenLite.from(this.img, .5, {
            opacity: 0,
            ease: Power4.easeIn
        });
    }
}

const tabs = document.querySelectorAll('.tabs-link').forEach(e => new TabLink(e));
