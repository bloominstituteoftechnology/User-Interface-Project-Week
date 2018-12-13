class Dropdown{
    constructor(element){
        this.element = element;

        this.button = this.element.querySelector('.dropdown-button');

        xbars.addEventListener('click', () =>{this.removeContent()} )
        
        this.content = this.element.querySelector('.dropdown-content');

        this.button.addEventListener('click', () => {this.toggleContent()});
    }

    toggleContent(){


        this.content.classList.remove('dropdown-hidden');
    }

    removeContent(){
        this.content.classList.add('dropdown-hidden');
    }
}


const xbars = document.querySelector('.x-bars');

let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown (dropdown));