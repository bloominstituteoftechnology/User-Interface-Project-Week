class TabLink {
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
        this.content = document.querySelector(`.tab-content[data-tab="${this.data}"`);
        this.element.addEventListener('click', () => this.select());
    }
    select(){
        const links = document.querySelectorAll('.tab-link');
        links.forEach(el => el.classList.remove('tab-link-selected'));
        this.element.classList.add('tab-link-selected');

        const allContent = document.querySelectorAll('.tab-content');
        allContent.forEach(el => el.classList.add('display-none'));
        this.content.classList.remove('display-none');
    }
}

const navigation = document.querySelector('.nav-open');
const navButton = document.querySelector('.nav-button');
const bigX = document.querySelector('.big-x');

navButton.addEventListener('click', function(){
    navigation.classList.toggle('display-hidden');
    navButton.classList.toggle('display-hidden');
    bigX.classList.toggle('display-hidden');
});

bigX.addEventListener('click', function(){
    navigation.classList.toggle('display-hidden');
    navButton.classList.toggle('display-hidden');
    bigX.classList.toggle('display-hidden');
});

tabLink = document.querySelectorAll('.tab-link');
tabLink.forEach(x => new TabLink(x));