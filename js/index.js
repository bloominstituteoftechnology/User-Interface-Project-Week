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
        this.className = cta.className;
        this.location = document.querySelector('.container');
        this.ctaSection = new CallToActionSection(cta.ctaSection);
        console.log(this.ctaSection)
    }

    placeCTA(){
        const section = document.createElement('section');
        section.className = "cta";
        section.classList.add(`${this.className}`);
        const trial = Array.from(this.ctaSection.placeCTASection());
        console.log(trial);
        // section.appendChild(this.ctaSection.placeCTASection);
        this.location.appendChild(section);
    }
}

class CallToActionSection {
    constructor(section){
        this.heading = section.heading;
        this.text = section.text;
        this.buttonText = section.buttonText;
        this.img = section.img;
        // this.placement = section.placement;
    }

    placeCTASection(){
        // const location = document.querySelector('.cta');
        const textSection = document.createElement('div');
        textSection.className = "text";
        
        const h2 = document.createElement('h2');
        h2.innerHTML = this.heading;
        
        const p = document.createElement('p');
        p.innerHTML = this.text;
        p.className = "";       //TODO: Define class

        const button = document.createElement('p');
        button.className = "button";
        button.innerHTML = this.buttonText;
        
        // const image = document.createElement('img');
        // image.src = this.img;
        // console.log(this.img)

        // location.classList.add(`${this.placement}`)     //TODO: Add class right or left
        textSection.appendChild(h2);
        textSection.appendChild(p);
        textSection.appendChild(button);

        // location.appendChild(textSection);
        // location.appendChild(image);
    }
}

const snj = new CallToActionSection({
    "heading": "Smith & Jones Architects",
    "text": "Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem.",
    "buttonText": "Learn more",
    "img": "img/home/home-img-1.png",
    // "placement": "right",
})

const fdesigns = new CallToActionSection({
    "heading": "Futuristic Designs",
    "text": "Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem.",
    "buttonText": "View Designs",
    "img": "img/home/home-img-2.png",
    // "placement": "left",
})

const secOne = new CallToAction({
    "className": "cta",
    "ctaSection": snj,
})

secOne.placeCTA();
// fdesigns.placeCTA();