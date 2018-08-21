// Dropdown Menu Class
class Dropdown {
    constructor(element) {
        this.element = element;

        // Get the dropdown button
        this.button = this.element.querySelector('.dropdown-button');
        // Get the dropdown content
        this.content = this.element.querySelector('.dropdown-content');

        this.button.addEventListener('click', () => { this.toggleContent(); });

    }

    // Toggles the dropdown menu's content
    toggleContent() {
        // Toggle the dropdown
        this.content.classList.toggle('dropdown-hidden');

        // Check if content is shown and change the hamburger icon
        // to reflect open and close
        if (this.content.classList.contains('dropdown-hidden')) {
            this.button.src = 'img/nav-hamburger.png';
        }
        else {
            this.button.src = 'img/nav-hamburger-close.png';
        }
        

    }
}

// Set the dropdown and set the dropdown to a class of Dropdown
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));