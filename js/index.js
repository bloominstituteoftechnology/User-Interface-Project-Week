const navButton = document.querySelector('.menu');
const nav = document.querySelector('nav');

let hamburgerIsClosed = true;

nav.style.display = 'none';

const hamburgerHandler = function() {
    if (hamburgerIsClosed) {
        document.getElementById('hamburger').src = '../img/nav-hamburger-close.png';

        TweenMax.from(nav, 1.5, {
            backgroundColor: 'black',
            ease:  Power4. easeOut, y: -500 
        });
        
        nav.style.display = ''; 
        hamburgerIsClosed = false;

    } else {
        document.getElementById('hamburger').src = '../img/nav-hamburger.png';

        nav.style.display = 'none'; 
        hamburgerIsClosed = true;
    }
};

navButton.addEventListener('click', hamburgerHandler);
