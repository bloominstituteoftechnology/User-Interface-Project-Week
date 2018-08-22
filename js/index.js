// JS goes here

// ---
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

