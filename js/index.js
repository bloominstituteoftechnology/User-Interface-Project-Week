// Dropdown Menu Class
class Dropdown {
    constructor(element) {
        this.element = element;

        // Stretch
        // Keeps track of when the menu should open or close for the animtion
        this.menuTog = 0;
        // End of Stretch

        // Get the dropdown button
        this.button = this.element.querySelector('.dropdown-button');
        // Get the dropdown content
        this.content = this.element.querySelector('.dropdown-content');

        this.button.addEventListener('click', () => { this.toggleContent(); });

        // Stretch
        let tl = new TimelineLite({paused:true});
        tl.to(this.content, 0.2, {opacity: 1, ease: Power0.easeInOut});
        this.content.animation = tl;
        // End of Stretch

    }

    // Toggles the dropdown menu's content
    toggleContent() {
        // Toggle the dropdown
        /**
         * Commented out because I moved to the stretch section.
         * Kept this for record.
         */
        // this.content.classList.toggle('dropdown-hidden');

        // Stretch
        if (this.menuTog === 0) {
            this.enter();
            this.menuTog ++;

            // Toggle the dropdown
            this.content.classList.toggle('dropdown-hidden');
        }
        else if (this.menuTog === 1) {
            this.out();
            this.menuTog--;

            // Toggle the dropdown
            this.content.classList.toggle('dropdown-hidden');
        }
        // End of Stretch


        // Check if content is shown and change the hamburger icon
        // to reflect open and close
        if (this.content.classList.contains('dropdown-hidden')) {
            this.button.src = 'img/nav-hamburger.png';
        }
        else {
            this.button.src = 'img/nav-hamburger-close.png';
        }
        

    }

    // Stretch
    enter() {
        this.content.animation.play();
    }

    out() {
        this.content.animation.reverse();
    }
    // End of Stretch
}

// Set the dropdown and set the dropdown to a class of Dropdown
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

// Animate the elements into view
let animateHTML = function () {
    let elems, windowHeight;

    let init = function () {
        // Get all elements with hidden class
        elems = document.querySelectorAll('.hidden');
        // Set window height
        windowHeight = window.innerHeight;
        _addEventHandlers();
    };

    // Add event listeners to the window
    let _addEventHandlers = function () {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    };

    // Check the position of the elements
    let checkPosition = function () {
      for (var i = 0; i < elems.length; i++) {
            // Get the top position
            var posFromTop = elems[i].getBoundingClientRect().top;
            // Replace hidden class with fade-in-element class
            if (posFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace('hidden', 'fade-in-element');
            }
        }
    };

    return {
        init: init
    };
};

animateHTML().init();