// JS goes here
const ham = document.querySelector('.ham');
const close = document.querySelector('.close-btn');
const navigation = document.querySelector('.nav-bar');
const links = document.querySelector('.navigation')
console.log(close)
ham.addEventListener('click', ()=>{
    navigation.style.height = '100%';
    close.style.display='block';
    ham.style.display='none';
    links.style.display = 'block'
})
close.addEventListener('click', () => {
    navigation.style.height = '';
    close.style.display = '';
    ham.style.display = '';
    links.style.display = ''
})

class TabLink {
    constructor(element) {
        this.element = element;
        this.tabData = element.dataset.tab;
        this.card = document.querySelector(`.card[data-tab ='${this.tabData}']`);
        this.element.addEventListener('click', () => {
        this.selectTab();
        });
    }

    selectTab() {
        let cards = document.querySelectorAll('.card');
            cards.forEach(element => {
            element.style.display = 'none';
        })
        this.card.style.display = 'flex';    
        const tabs = document.querySelectorAll('.tab');;
            tabs.forEach(tab => {
            tab.style.backgroundColor = '';
            tab.style.color = '';
            })
        this.element.style.backgroundColor = '#5E9FB9';
        this.element.style.color = 'black';
    }

}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(element => {
    return new TabLink(element)
})

tabs[0].selectTab();