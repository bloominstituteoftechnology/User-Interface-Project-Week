const toggleMenu = (e) => {
        menu.classList.toggle('dropdown-hidden');
        let menuAttr = menuBtn.getAttribute('src');
        if (menuAttr === "/img/nav-hamburger.png") {
            menuBtn.setAttribute('src', '/img/nav-hamburger-close.png');
            console.log(menuAttr);
    } else if (menuAttr === "/img/nav-hamburger-close.png") {
        menuBtn.setAttribute('src', '/img/nav-hamburger.png');
    }  
}

let menu = document.querySelector('.dropdown-content');
let menuBtn = document.querySelector('.hamburger-btn');

menuBtn.addEventListener('click', toggleMenu);
