

class Question {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.expand-button');
        this.buttonText = document.querySelector(".expand-button").innerText;
        this.button.addEventListener('click', event => {
            this.expandFAQ();
        });
    }

    expandFAQ() {
        event.currentTarget.parentNode.classList.toggle('expand');
        
        if (event.currentTarget.parentNode.hasClass('expand')) {
            this.buttonText = 'Close';
        } else {
            this.buttonText = 'More Info:';
        }
        
        
    }
}

let questions = document.querySelectorAll('.faq');

questions = Array.from(questions).map( question => new Question(question));
