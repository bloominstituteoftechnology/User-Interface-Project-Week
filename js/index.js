// JS goes here

// ----- OPEN AND CLOSE NAVIGATION MENU ----- 

// Create references to nav button classes and nav content class
let navigationOpenButton = document.querySelector('.nav-hamburger');
let navigationCloseButton = document.querySelector('.nav-close');
let navigationContent = document.querySelector('.navigation-content');

// Add event listener for click on nav open button
navigationOpenButton.addEventListener('click', (event) => {
    navigationContent.classList.toggle('navigation-hidden');
    console.log('Nav Open button clicked');
});

// Add event listener for click on nav close button
navigationCloseButton.addEventListener('click', (event) => {
    navigationContent.classList.toggle('navigation-hidden');
    console.log('Nav Open button clicked');
});

// ----- CHANGE IMAGE SOURCES ON MOBILE/DESKTOP -----

// Create reference to window width media query
let windowWidth = window.matchMedia('(max-width: 600px)');

// Create reference to desktop images in homepage top-content
let desktopImages = document.querySelectorAll('.desktop-image');

// Create reference to desktop images in homepage top-content
let mobileImages = document.querySelectorAll('.mobile-image');

// Function to make changes for mobile screens (<= 500px)
function mobileChanges(widthCheck) {
    if (widthCheck.matches) {
        desktopImages.forEach(image => {
            image.classList.add('hide-image');
        });
        mobileImages.forEach(image => {
            image.classList.remove('hide-image');
        });
    } else {
        desktopImages.forEach(image => {
            image.classList.remove('hide-image');
        });
        mobileImages.forEach(image => {
            image.classList.add('hide-image');
        });
    }
}

windowWidth.addListener(mobileChanges);

// ----- CHANGE ACTIVE TAB AND TAB-CONTENT ON SERVICES PAGE -----

class Tab {
    constructor(element) {
        this.element = element;

        // Get the custom data attribute of the tab
        this.tabName = this.element.dataset.tab;

        //Use tabName to get the corresponding tab-content element
        this.tabContentElement = document.querySelector(`.tab-content[data-tab = '${this.tabName}']`);

        // Use the tabContentElement to create a new instance of the TabContent class
        this.tabContent = new TabContent(this.tabContentElement);

        // Add a click event listener on this instance to call the select() method on click
        this.element.addEventListener('click', () => {
            this.select();
        });
    }

    select() {
        // Get all of the elements with the .tab class.
        let tabs = document.querySelectorAll('.tab');

        // Iterate through tabs (from previous step) and remove the 'active-tab' class from each one.
        Array.from(tabs).forEach(tab => {
            tab.classList.remove('active-tab');
        });

        // Add the 'active-tab' class to this Tab element.
        this.element.classList.add('active-tab');

        // Call the select() method on the tabContent element associated with this Tab
        this.tabContent.select();
    }
}

class TabContent {
    constructor(element) {
        this.element = element;
    }

    select() {
        // Get all 'tab-content' elements 
        let tabContentElements = document.querySelectorAll('.tab-content');

        // Remove the 'active-tab-content' class from each 'tab-content' element
        Array.from(tabContentElements).forEach(element => {
           element.classList.remove('active-tab-content'); 
        });

        // Add the 'active-tab-content' class to this TabContent element
        this.element.classList.add('active-tab-content');
    }
}

// Create reference to all elements with the ".tab" class.
let tabs = document.querySelectorAll('.tab');

// Iterate through tabs (from the previous step) and create a new instance of the "Tab" class for each item.
tabs = Array.from(tabs).map(tab => new Tab(tab));

// Once you have created an array of Tab instances, call select() on the first item in the array.
tabs[0].select();