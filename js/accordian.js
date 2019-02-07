// Accordian Component

class Panel {
  constructor(panel) {
    this.panel = panel;
    this.headers = this.panel.querySelector('.headering');
    this.answers = this.panel.querySelector('.answers');
    this.cross = this.panel.querySelector('.headering p');

    this.headers.addEventListener('click', () => this.toggleAnswers());
  }

  toggleAnswers() {
    if (this.answers.classList.contains('show')) {
      this.answers.classList.toggle('show');
      this.cross.classList.toggle('rotate');
    } else {
      document
        .querySelectorAll('.answers')
        .forEach(item => item.classList.remove('show'));
      document
        .querySelectorAll('.answers')
        .forEach(item => (item.style.maxHeight = '0px'));

      document
        .querySelectorAll('.headering p')
        .forEach(item => item.classList.remove('rotate'));

      this.answers.classList.toggle('show');
      this.answers.style.maxHeight = `${this.answers.scrollHeight}px`;

      this.cross.classList.toggle('rotate');
    }
  }
}

document.querySelectorAll('.panel').forEach(panel => new Panel(panel));
