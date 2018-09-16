// JS goes here

/***************************************
 * TOGGLE THE NAVIGATION DROPDOWN MENU *
 * **************************************/

//grab nav button div
const navButton = document.querySelector('.nav-button');
console.log(navButton);
//grab images within nav button
const navImages = navButton.querySelectorAll('img');

//grab dropdown nav element
const navDropdown = document.querySelector('.nav-dropdown');

//grab anchor tags - for use when giving default focus to link
const navLinks = document.querySelectorAll('.nav-anchor a');

//grab body element - used to hide scollbars
const body = document.querySelector('body');

//clickHandler for navButton
const navButtonHandler = function(event){
    //display correct menu button image
    navImages.forEach(function(img){
        img.classList.toggle("hide-nav");
    });
    navDropdown.classList.toggle('hide-nav');

    //set default focus on correct link
    navLinks.forEach(function(link){
        console.log(link.textContent);
        console.log(navButton.dataset.id);
        if(link.textContent === navButton.dataset.id){
            console.log(link.textContent);
            link.style.color = '#222222';
        }
    });

    //toggle scrollbars hidden
    body.classList.toggle('hide-scroll');
}

//Add event listenter to nav button
navButton.addEventListener('click', navButtonHandler);