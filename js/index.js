// JS goes here

class CreateSection {
    constructor(obj){
        this.className = obj.className;
        this.childSection = new CallToActionSection(obj.childSection);
        this.location = document.querySelector('.container');
        /*
        if (this.className === "cta"){
            this.childSection = new CallToActionSection(obj.childSection);
        }
        else{
            this.childSection = new ProjectSection(obj.childSection);
        }
        */

        console.log(this.childSection);
        // console.log(this.ctaSection)
        this.section = document.createElement('section');
    }

    placeCTA(){
        // Bind values to  cta section
        this.section.className = this.className;
        this.section.classList.add(`${this.childSection.placement}`);
        
        // Create child objects
            // Text Section
        const textSection = document.createElement('div');
        textSection.className = "text";
        
        const h2 = document.createElement('h2');
        h2.innerHTML = this.childSection.heading;
        
        const p = document.createElement('p');
        p.innerHTML = this.childSection.text;
        p.className = "";       //TODO: Define class

        const button = document.createElement('p');
        button.className = "button";
        button.innerHTML = this.childSection.buttonText;

        textSection.appendChild(h2);
        textSection.appendChild(p);
        textSection.appendChild(button);

            // Image section
        const image = document.createElement('img');
        image.src = this.childSection.img;
        
        // Append all children
        this.section.appendChild(textSection);
        this.section.appendChild(image);
        this.location.prepend(this.section);
    }

    placeProject() {
        // this.section.className = this.className;
        // this.section.classList.add(`${this.childSection.placement}`);
    }
}


class ProjectSection {
    constructor(section){
        this.heading = section.heading;
        this.text = section.text;
        this.img = section.img;
        this.placement = section.placement;
    }
}

class CallToActionSection extends ProjectSection {
    constructor(section){
        super(section);     //TODO: FIX THIS
        this.buttonText = section.buttonText;
    }
}

// Create call to action sections
const snj = new CallToActionSection({
    "heading": "Smith & Jones Architects",
    "text": "Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem.",
    "buttonText": "Learn more",
    "img": "img/home/home-img-1.png",
    "placement": "right",
})

const fdesigns = new CallToActionSection({
    "heading": "Futuristic Designs",
    "text": "Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem.",
    "buttonText": "View Designs",
    "img": "img/home/home-img-2.png",
    "placement": "left",
})

console.log(snj)
// Create each CTA with child object.
const secOne = new CreateSection({
    "className": "cta",
    "childSection": snj,
})

console.log(secOne)
const secTwo = new CreateSection({
    "className": "cta",
    "childSection": fdesigns,
})

secTwo.placeCTA();
secOne.placeCTA();

// fdesigns.placeCTA();

function placeItemInHtml(source, type, style, text, place){
    source = document.querySelector(`${source}`);
    const obj = document.createElement(type);
    obj.classList.add(style);
    obj.innerHTML = text;
    place === "append" ? source.appendChild(obj) : source.prependChild(obj);
}

/* - LOOK INTO THIS LATER
function placeItemInHtml(source, obj){
    source = document.querySelector(`${source}`);
    const obj = new CreateSection;
    obj.classList.add(style);
    obj.innerHTML = text;
    place === "append" ? source.appendChild(obj) : source.prependChild(obj);
}
*/

