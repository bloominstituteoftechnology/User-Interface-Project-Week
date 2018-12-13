class TabNavigators {
    constructor() {
        this.selectedNavigator;
        this.tabNavigators = [];
        this.initialize();
    }

    initialize() {
        document.querySelectorAll('.tab-navigator').forEach(t => {
            let thisNavigator = new TabNavigator(t);
            this.tabNavigators.push(thisNavigator);
        });

        this.selectedNavigator = this.tabNavigators[1];
        this.selectedNavigator.select();

        this.tabNavigators.forEach(t => {
            t.element.addEventListener('click', () => {
                if (this.selectedNavigator !== t) {
                    this.selectedNavigator.deselect();
                    t.select();
                    this.selectedNavigator = t;
                }
            })
        })
    }
}

class TabNavigator {
    constructor(el) {
        this.element = el;
        this.data = this.element.dataset.tab;
        this.contentElement = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
        this.tabContent = new Content(this.contentElement);
    }

    select() {
        this.element.classList.add('selected');
        this.tabContent.select();
    }

    deselect() {
        this.element.classList.remove('selected');
        this.tabContent.deselect();
    }
}

class Content {
    constructor(el) {
        this.element = el;
    }

    select() {
        this.element.style.display = 'block';
    }

    deselect() {
        this.element.style.display = 'none';
    }
}

let tabs = new TabNavigators();