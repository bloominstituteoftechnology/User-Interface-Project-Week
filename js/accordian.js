// Accordian Component

class Panel {
  constructor(panel) {
    this.panel = panel;
    this.headers = this.panel.querySelector('.headering');
    this.answers = this.panel.querySelector('.answers');

    this.headers.addEventListener('click', () => this.toggleAnswers());
  }

  toggleAnswers() {
    if (this.answers.classList.contains('show')) {
      this.answers.classList.toggle('show');
    } else {
      document.querySelectorAll('.answers').forEach(item => item.classList.remove('show'));
      document.querySelectorAll('.answers').forEach(item => item.style.maxHeight ="0px");
      this.answers.classList.toggle('show');
      this.answers.style.maxHeight = `${this.answers.scrollHeight}px`;
    }
  }
}

document.querySelectorAll('.panel').forEach(panel => new Panel(panel));
