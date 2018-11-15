// JS goes here
const navBar = document.querySelector('.nav-bar');
[logo, navButton, nav] = navBar.children;
navButton.addEventListener('click', () => {
    if (navBar.style.height !== '100%'){
        navBar.style.height = '100%';
        navBar.style.background = 'rgba(153, 164, 175, 0.7)';
        navBar.style.alignItems = 'flex-start';
        logo.style.marginTop = '13px';
        navButton.style.marginTop = '14.5px';
        navButton.src = 'img/nav-hamburger-close.png';
        nav.style.display = 'block';
    } else {
        navBar.style.height = '50px';
        navBar.style.background = '#99A4AF';
        navBar.style.alignItems = 'center';
        logo.style.marginTop = '0';
        navButton.style.marginTop = '0';
        navButton.src = 'img/nav-hamburger.png';
        nav.style.display = 'none';
    }
});