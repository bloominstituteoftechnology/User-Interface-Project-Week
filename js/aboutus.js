class Question {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector(".expand-button");
    this.buttonText = document.querySelector(".expand-button").innerText;

    this.button.addEventListener("click", event => {
      this.expandFAQ();

    });
  }


  expandFAQ() {
    event.currentTarget.parentNode.classList.toggle("expand");
    // TweenMax.to(this.element, 2, {
    //     ease: Power1.easeOut,
    //     height: '100%'
    //   });
  }
}

let questions = document.querySelectorAll(".faq");

questions = Array.from(questions).map(question => new Question(question));

let buttons = document.querySelectorAll(".expand-button");
buttons = Array.from(buttons);

function expandQuestion(arr) {}

expandQuestion(buttons);
