// Nav Bar
class NavItem {
    constructor(element) {
        this.element = element;        
        this.open = this.element.querySelector('.hamburger-button');
        this.close =this.element.querySelector('.hamburger-close');
        this.content = this.element.querySelector('.nav-content');
        this.open.addEventListener('click', () => {this.dropdown('open');
        this.open.classList.add('hidden');
        this.close.classList.remove('hidden');
            }
        );
        this.close.addEventListener('click', () => {this.dropdown('close');
        this.close.classList.add('hidden');
        this.open.classList.remove('hidden');
            }
        );      
    }  
    dropdown(task) {
    task === 'open' ? this.content.classList.remove('hidden') : this.content.classList.add('hidden');
    }
}

let items = document.querySelectorAll('nav');
items = Array.from(items).map(item => new NavItem(item));

//Services

class TabLink {
    constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    console.log(this.itemElement);
    this.tabItem = new TabItem(this.itemElement);
    console.log(this.tabItem);
    this.element.addEventListener('click', () => {this.select()});
    };

    select() {
    const links = document.querySelectorAll('.tabs-link');
    links.forEach(item => item.classList.remove('selected'));
    this.element.classList.add('selected');
    this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        const tabs = document.querySelectorAll('.tabs-item');
        tabs.forEach(item => item.style.display = 'none');
        this.element.style.display = 'block';
    }
}

let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map(element => new TabLink(element));
links[0].select();