// JS goes here

const button = document.getElementById("menuOpen").addEventListener("click", unhide());


function unhide(id) {
    const selector = document.getElementsById('navbox')
    if (selector.style.display === 'none') {
        selector.style.display = 'block';
    } else {
        selector.style.display ='none';
    }
}