class Question {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector(".expand-button");
        this.button.textContent = "More Info:";
        this.currentState = false;

        this.button.addEventListener("click", event => {
            this.expandFAQ();
        });
    }

    expandFAQ() {
        if (this.currentState) {
            TweenMax.to(this.element, 0.5, {
                css: { className: '-=expand' },
                ease: Power4.easeOut,
            });
            this.button.textContent = "More Info:";
        } else {
            TweenMax.to(this.element, 0.5, {
                css: { className: '+=expand' },
                ease: Power4.easeOut,
            });
            this.button.textContent = "Close";
        }
        this.currentState = !this.currentState;
    }
}

let questions = document.querySelectorAll(".faq");

questions = Array.from(questions).map(question => new Question(question));
