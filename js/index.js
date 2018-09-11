// JS goes here
const navigation = {
    "nav": {
        "nav-item": "Home",
        "nav-item": "Services",

    }

}

const homePage = {

}

const services = {

}


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

homeLink.placeLink()
serviceLink.placeLink();
contactLink.placeLink();



class CallToAction {
    constructor(cta){
        this.heading = cta.heading;
        this.text = cta.text;
        this.buttonText = cta.buttonText;
        this.img = cta.img;
        this.placement = cta.placement;
    }

    placeCTA(){
        const location = document.querySelector('.cta');
        const textSection = document.createElement('div');
        textSection.className = "text";
        
        const h2 = document.createElement('h2');
        h2.innerHTML = this.heading;
        
        const p = document.createElement('p');
        p.innerHTML = this.text;
        p.className = "";       //TODO: Define class
        
        const image = document.createElement('img');
        img.src = this.img;

        location.classList.add(`${this.placement}`)     //TODO: Add class right or left
        textSection.appendChild(h2);
        textSection.appendChild(p);
        location.appendChild(textSection);
        location.appendChild(image);


    }
}