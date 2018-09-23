class Navigation {
    constructor (navItem){
        this.text = navItem.text;
        this.link = navItem.link;
        this.linkType = "a";
        this.className = navItem.className;
    }

    placeLink(){
        const location = document.querySelector('.nav');
        const newLi = document.createElement('li');
        newLi.className = "nav-item";
        location.appendChild(newLi);
        
        const newNavLink = document.createElement(this.linkType);
        console.log(newNavLink)
        newNavLink.href = this.link;
        newNavLink.innerHTML = this.text;
        newLi.appendChild(newNavLink);
        // this.text = document.querySelector(`${this.className} a`).innerHTML;
    }
}

const homeLink = new Navigation({
    "text": "Home", 
    "link": "#",
    "className": "nav-item",
})

const serviceLink = new Navigation({
    "text": "Services", 
    "link": "#",
    "className": "nav-item",
})

const contactLink = new Navigation({
    "text": "Contact", 
    "link": "#",
    "className": "nav-item",
})

homeLink.placeLink();
serviceLink.placeLink();
contactLink.placeLink();


const menubutton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menubutton.addEventListener('click', menuClick);

function menuClick() {
    console.log("Toggle")
    menu.classList.toggle('menu-activate');
}