const navButton = document.querySelector('.menu');
const anchors = document.querySelectorAll('a');

let hamburgerIsClosed = true;

anchors.forEach(a => {
    a.style.display = 'none';
});

const hamburgerHandler = function() {
    if (hamburgerIsClosed) {
        document.getElementById('hamburger').src = '../img/nav-hamburger-close.png';

        anchors.forEach(a => {
            a.style.display = '';
        });

        hamburgerIsClosed = false;
    } else {
        document.getElementById('hamburger').src = '../img/nav-hamburger.png';

        anchors.forEach(a => {
            a.style.display = 'none';
        });
        
        hamburgerIsClosed = true;
    }
};

navButton.addEventListener('click', hamburgerHandler);
