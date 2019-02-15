// JS goes here

    const toggle = () => {
        menu.classList.toggle('menu-hidden');
    }
    const menuBtn = document.querySelector('.menu-open');
    const closeBtn = document.querySelector('.menu-close');
    const menu = document.querySelector('.menu-hidden');
    
    menuBtn.addEventListener('click', toggle);
    closeBtn.addEventListener('click', toggle);


class TabLinks {
    constructor(tabs){
        this.tabs = tabs;

        console.log(this.tabs);
    }
    
}


class TabContent {
    constructor(content) {
        this.content = content;
    }
}

document.querySelectorAll('.tab-link').forEach(tab => new TabLinks(tab));