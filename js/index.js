

// MENU DROP DOWN

// Menu toggle function

const toggleDisplay = () => {
    console.log('button clicked');

    menu.classList.toggle('menu-display-block');
}

// Grab drop down menu to display

const menu = document.querySelector('.menu');

// Reference hamburger button 

const hamburger = document.querySelector('.hamburger');

// Add event listener to hamburger button

hamburger.addEventListener('click', toggleDisplay);


//------------------------------------



