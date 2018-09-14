// JS goes here
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