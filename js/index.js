class Dropdown {
    constructor(element) {
        // assign this.element to the dropdown element
        this.element = element;
        // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
        this.button = this.element.querySelector('.dropdown-button')
        // assign the reference to the ".dropdown-content" class found in the dropdown element
        this.content = this.element.querySelector('.dropdown-content');
        // Add a click handler to the button reference and call the toggleContent method.
        this.button.addEventListener('click', () => {
            this.toggleContent()
        })
        // Instructor note, the reason we must wrap the toggleContent method in an anonymous function is that 'this' in toggleContent
        // would refer to the button, NOT the current instance of the class. 
    }

    toggleContent() {
        // Toggle the ".dropdown-hidden" class off and on
        this.content.classList.toggle('dropdown-hidden');
    }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));