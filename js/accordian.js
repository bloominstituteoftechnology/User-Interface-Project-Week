// Accordian Component

class Panel {
  constructor(panel) {
    this.panel = panel;
    this.headers = this.panel.querySelector('.panel h3');
    this.answers = this.panel.querySelector('.panel p');

    this.headers.addEventListener('click', () => this.toggleAnswers());
  }

  toggleAnswers() {
    if (this.answers.classList.contains('show')) {
      this.answers.classList.remove('show');
    } else {
      document.querySelectorAll('.panel p').forEach(item => item.classList.remove('show'));
      this.answers.classList.toggle('show');
    }
  }
}

document.querySelectorAll('.panel').forEach(panel => new Panel(panel));
