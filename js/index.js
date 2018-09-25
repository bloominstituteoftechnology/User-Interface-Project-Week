// JS goes here
class TabLink {
    constructor(element) {
        // Assigns this.element to the element that was passed in the constructor
        this.element = element;
        // Assigns this.tabData to the elements data attribute value;
        this.tabData = this.element.dataset.tab;
        // Assigns the this.itemElement to the tab item with the matching tabData
        this.itemElement = document.querySelector(`.tab-item[data-tab='${this.tabData}']`);
        // console.log(this.itemElement);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => {
            this.select();
        });
    };

    select() {
        let tabs = document.querySelectorAll('.tab');

        tabs = tabs.forEach(item => {
            item.classList.remove('active-tab');
        });
        this.element.classList.add('active-tab');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        let tabItems = document.querySelectorAll('.tab-item');
        tabItems = Array.from(tabItems).forEach(item => {
            item.style.display = "none";
        });
        this.element.style.display = "block";
    }
}



// Grabs all the tabs in a nodeList
const tabs = document.querySelectorAll('.tab');
//Loops through node list and takes each element in the nodeList and puts it in the class.
tabs.forEach(item => new TabLink(item));