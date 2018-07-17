class Tabs {
    constructor(element) {
        this.element = element;
        // create a reference to the .tab-button class nested in our tab object
        this.buttons = this.element.querySelectorAll('.tab-button');
        // conver node list to array then map over the aray of buttons to create a new TabsButton class instance of each button
        this.buttons = Array.from(this.buttons).map( button => {
            return new TabsButton(button, this);
        });
        // logs an array of tab buttons
        console.log(this.buttons);
        // set active button to the first item of the array of buttons
        this.activeButton = this.buttons[0];
        console.log(this.activeButton)
        // invoke the init() method 
        this.init();
    }
    init() {
        // invoke the method select on activeButton
        this.activeButton.select();
    }
    updateActive(newActive) {
        // invoke the method deselect() on activeButton
        this.activeButton.deselect();
        // assign this.activeButton to the new active link
        this.activeButton = newActive;
    }
    getTab(data) {
    return this.element.querySelector(`.tab-content[data-tab="${data}"]`);
    }
} // class Tabs

class TabsButton{
    constructor(button, parent) {
        this.button = button;
        // linking the button class to the parent aka class Tabs
        this.parent = parent;
        // using the getTab method from the parent class, pass in reference to the custom data attribute
        this.tabsContent = parent.getTab(this.button.dataset.tab);
        // create a new tabContent object that passes in a tabsContent value that we created on the line above
        this.tabsContent = new TabsContent(this.tabsContent);
        // add event listener to this.button that passes this to this.parent.updateActive then invoke this.select()
        this.button.addEventListener('click', () => {
            this.parent.updateActive(this);
            this.select();
        });
    }
    select() {
        // add class named tab-content-selected to the button
        this.button.classList.add('tab-content-selected');
        // use the select method on tabsContent
        this.tabsContent.select();
    }
    deselect() {
        this.button.classList.remove('tab-content-selected');
        this.tabsContent.deselect();
    }
} // class TabsButton

class TabsContent {
    constructor(element) {
        this.element = element;
    }
    select() {
        this.element.classList.add('tab-content-selected');
    }
    deselect() {
        this.element.classList.remove('tab-content-selected');
    }
}



let tabs = document.querySelectorAll('.tabs');

tabs = Array.from(tabs).map( tab => new Tabs(tab));
