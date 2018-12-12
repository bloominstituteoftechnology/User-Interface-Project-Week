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

//=============== component

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

        const headerMatch = document.querySelector('.btn-content span');
        headerMatch.textContent = this.textContent;
        //console.log(headerMatch);
    }
}

// gets all buttons
const btns = document.querySelectorAll('.top button');

// makes each button "smart"
btns.forEach(btn => new Button(btn))


