// JS goes here


/////// 1.-Hambourger Button & Expand view Menu Nav //////////////
const btnHambourger = document.querySelector('.nav-top--btn'),
       navMenu = document.querySelector('.nav ul');
       
btnHambourger.addEventListener('click', ()=>{
        this.event.target.classList.toggle('close');
        this.event.target.classList.toggle('open');
        navMenu.classList.toggle('nav--links__open');
})

///////2. -Services page tab navigator //////////////

class Tab{
    constructor(el){
        this.el = el
        this.data = this.el.dataset.tab
        this.itemElement = document.querySelector(`.tab-description[data-tab="${this.data}"]`);
        this.tabItem = new TabItem (this.itemElement)
        this.el.addEventListener('click', () => {this.select()})

    }

    select(){
       let links = document.querySelectorAll('.btn-tab--link')
       Array.from(links).forEach( link => {link.classList.remove('btn-link-selected')});
       this.el.classList.add('btn-link-selected')
       this.tabItem.select()
    }
}

class TabItem{
    constructor(tabEl){
        this.itemTab = tabEl;
    }
    select(){
        let tabElements = document.querySelectorAll('.tab-description')
        Array.from(tabElements).forEach( tabelement => {tabelement.classList.remove('tab-element-selected')});
        this.itemTab.classList.add('tab-element-selected')
     }

}


const tablinks = document.querySelectorAll('.btn-tab--link'),
Tablinks = Array.from(tablinks).map( link => new Tab(link))
Tablinks[0].select()