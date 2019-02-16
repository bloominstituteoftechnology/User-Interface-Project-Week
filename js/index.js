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
        // Add click event listener to all the tabs
        this.tabs.addEventListener('click', this.select.bind(this));
        // Store the number of the <div class="tab-link" data-tab="2">Construction</div> = 2
        this.data = tabs.dataset.tab;
        // Store the corresponding tab content
        this.dataElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
        // Craete new tab content class with the corresponding tab content
        this.tabContent = new TabContent(this.dataElement);
        
        
        
    }
    select() {
        // Remove the selected class from all tabs
        const links = document.querySelectorAll('.tab-link');
        links.forEach(link => {
            link.classList.remove('tab-link-selected');
        });
        // Add the selected class to the tab that was clicked
        this.tabs.classList.add('tab-link-selected');
        // Call the 
        this.tabContent.select();
    }
    
}


class TabContent {
    constructor(content) {
        this.content = content;
    }
    select() {
        const items = document.querySelectorAll('.tab-item');
        // console.log(items);
        items.forEach(item => item.classList.remove('tab-item-selected'));
        
        this.content.classList.add('tab-item-selected');
        
    }
}

document.querySelectorAll('.tab-link').forEach(tab => new TabLinks(tab));