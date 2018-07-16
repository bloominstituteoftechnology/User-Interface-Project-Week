//* Great Ancestor Constructor Fucntion//
class TabComponentMaker {
	constructor(element) {
		this.element = element;
		this.buttons = this.element.querySelectorAll(".services-buttons");
        console.log(this.buttons);
        this.buttons = Array.from(this.buttons).map ( element => {
            return new TabClick(element, this);
        });
        this.activeButton = this.buttons[0];
        this.init();
    }

    init() {
        this.activeButton.select();
    }
    updateActive(newActive) {
        this.activeButton.deselect();
        this.activeButton = newActive;
    }

    getTab(data) {
        return this.element.querySelector(`.services-tab[data-tab="${data}"]`)
    }

}

//**Click Listener Constructor*/
class TabClick {
    constructor(element, parent) {
        this.element = element;
        this.parent = parent;
        this.thingToClick = parent.getTab(this.element.dataset.tab);
        this.actualContent = new Content(this.thingToClick);
        this.element.addEventListener('click', () => {
            this.parent.updateActive(this);
            this.select();
        });
    };

    select() {
        this.element.classList.add('tabs-link-selected')
        this.thingToClick.select();
    }

    deselect() {
        this.element.classList.remove('tabs-link-selected')
        this.thingToClick.deselect();
    }
}

//*Content Panel Contructor/
class Content {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add('tabs-item-selected');
    }

    deselect() {
        this.element.classList.remove('tabs-item-selected');
    }
}

//**Control flow begins */
let wrapper = document.querySelectorAll(".component-wrapper");
wrapper = Array.from(wrapper).map(item => new TabComponentMaker(item));

console.log(wrapper);
