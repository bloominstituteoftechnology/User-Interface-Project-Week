// Accordian Component
class Panel {
  constructor(panel) {
    this.panel = panel;
    // grab questions (headers), answer sections, and the X for closing
    this.headers = this.panel.querySelector('.headering');
    this.answers = this.panel.querySelector('.answers');
    this.cross = this.panel.querySelector('.headering p');
    // add event listener to the questions
    this.headers.addEventListener('click', () => this.toggleAnswers());
  }

  toggleAnswers() {
    if (this.answers.classList.contains('show')) {
      this.answers.classList.toggle('show');
      this.cross.classList.toggle('rotate');
    } else {
      // remove .show styles from all answers and reset maxHeight to 0px
      document.querySelectorAll('.answers').forEach(item => item.classList.remove('show'));
      document.querySelectorAll('.answers').forEach(item => (item.style.maxHeight = '0px'));
      // remove .rotate styles from all panels to undo X rotation and coloring
      document.querySelectorAll('.headering p').forEach(item => item.classList.remove('rotate'));
      // add .show styles to the active answer and set the maxHeight to scrollHeight
      this.answers.classList.toggle('show');
      this.answers.style.maxHeight = `${this.answers.scrollHeight}px`;
      // toggle on .rotate styles for the active header X
      this.cross.classList.toggle('rotate');
    }
  }
}

document.querySelectorAll('.panel').forEach(panel => new Panel(panel));
