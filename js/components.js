class Button {
    constructor(buttonElement) {
        //Sets up a button object
        this.buttonElement = buttonElement;
        //Grabs the data-tab associated with current button element
        this.data = this.buttonElement.dataset.tab;
        //Grabs the tab from the document associated with the data-tab
        this.tab = document.querySelector(`.services-tab-components[data-tab ='${this.data}']`);
        //creates a new tab element
        this.tab = new Tab(this.tab);
        //Adds a click listener to button. Bind binds this to the current button
        this.buttonElement.addEventListener('click', this.buttonSelect.bind(this))
    }

    buttonSelect() {
        //Selects all buttons from document
        const buttons = document.querySelectorAll('.services-btn');
        //For each button, removes the btn-selected class
        buttons.forEach(button => {
            button.classList.remove('btn-selected');
        });
        //Adds the btn-selected to the current button only (The button that was clicked)
        this.buttonElement.classList.add('btn-selected');
        console.log(this.buttonElement);
        //this.tab is a Tab Object. This grabs Tab's method of tabSelect.
        //Shows the tab associated with the button's data-tab
        this.tab.tabSelect()
    }
}


class Tab {
    constructor(tabElement) {
        this.tabElement = tabElement;
    }

    tabSelect() {
        //Selects all tabs
        const tabs = document.querySelectorAll('.services-tab-components');
        //removes show-tab from all tabs
        tabs.forEach(tab => {
            tab.classList.remove('show-tab');
        });
        //Adds show-tab to current tab
        this.tabElement.classList.add('show-tab');
        console.log(this.tabElement);
    }
}

//Selects all the buttons
let buttons = document.querySelectorAll('.services-btn');
//creates a new button object for all buttons
buttons.forEach(button => new Button(button));

//Shows the first tab
showFirstTab = new Button(buttons[0]);
showFirstTab.buttonSelect();

