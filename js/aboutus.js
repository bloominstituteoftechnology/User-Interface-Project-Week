

class Question {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.expand-button');
        this.buttonText = document.querySelector(".expand-button").innerText;
        this.button.addEventListener('click', event => {
            TweenMax.from(this.element, 2 , {
                ease: Power1.easeOut,
            });
            this.expandFAQ();
        });
    }

    expandFAQ() {
        event.currentTarget.parentNode.classList.toggle('expand');        
    }
}

let questions = document.querySelectorAll('.faq');

questions = Array.from(questions).map( question => new Question(question));
