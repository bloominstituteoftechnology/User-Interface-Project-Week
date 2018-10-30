class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tab-content[data-tab='${this.data}]`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => {
            this.selectTab()
        });
    }

    selectTab() {
            const tlinks = document.querySelectorAll('.tab');

            Array.from(tlinks).forEach(tlink => {
                tlink.classList.remove('tab-selected')
            });

            this.element.classList.add('tab-selected');

            this.tabItem.select();
        }
        // deselect() {
        //     this.link.classList.remove('tab-selected');

    //     this.tabItem.deselect();
    // }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }
    select() {
            let items = document.querySelectorAll('.tab-content');

            Array.from(items).forEach(item => {
                item.classList.remove('tab-selected')
            });

            this.element.classList.add('tab-selected');
        }
        // deselect() {
        //     this.link.classList.remove('tab-selected');

    //     this.tabLink.deselect();
    // }
}
















let tlinks = document.querySelectorAll('.tabs');
console.log(tlinks);
tlinks = Array.from(tlinks).map(tlink => new TabLink(tlink));