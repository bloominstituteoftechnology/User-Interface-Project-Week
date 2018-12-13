//=============== nav button scripts

const headerButton = document.querySelector('#header-button');
const dropMenu = document.querySelector('.drop-menu');
const buttonImg = document.querySelectorAll('.menu button img');

onClick = () => {
    dropMenu.classList.toggle('inactive');
    buttonImg[0].classList.toggle('hidden');
    buttonImg[1].classList.toggle('hidden');
}

headerButton.addEventListener('click', onClick);

//=============== services button component

// gets all images 
const btnContent = document.querySelectorAll('.btn-content img');

class Button {
    constructor(element) { 
        this.element = element; // is a button
        this.element.addEventListener('click', this.btnClick); 
    }

    btnClick () {
        btnContent.forEach(img => {
            img.classList.add('inactive');
        });

        // selects image that matches button data attribute
        const imgMatch = btnContent[this.dataset.tab-1];
        imgMatch.classList.remove('inactive');

        // changes header to match image content selected
        const headerMatch = document.querySelector('.btn-content span');
        headerMatch.textContent = this.textContent;
    }
}

// gets all buttons
const btns = document.querySelectorAll('.top button');

// makes each button "smart"
btns.forEach(btn => new Button(btn))

//=========================== contact speech-bubble button component

// selects speech bubble images
const speechBubbles = document.querySelectorAll('.team-button');

// selects speech bubble paragraphs
const speechBubbleContent = document.querySelectorAll('.team-speak p');

class SpeechB {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', this.expandBubble);
    }

    expandBubble () {
        // matches speech button to speech paragraph
        const speechContent = speechBubbleContent[this.dataset.tab-1];
        // displays & hides on click
        speechBubbleContent.forEach(p => p.classList.add('inactive'));
        speechContent.classList.toggle('inactive');
        speechContent.addEventListener('click',() => speechBubbleContent.forEach(p => p.classList.add('inactive')));
    }
}

speechBubbles.forEach(bubble => new SpeechB(bubble));


