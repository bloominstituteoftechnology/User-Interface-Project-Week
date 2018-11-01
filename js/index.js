function toggleMenuOn() {
  TweenMax.from('.nav-bar', 1.5, { y: -500, ease: Bounce.easeOut });
  closedNav.style.display = 'none';
  openNav.style.display = 'block';
  navItems.style.display = 'block';
  nav.style.height = '100%';
}
function toggleMenuOff() {
  TweenMax.from('.nav-bar', 0.3, { rotationX: -360, ease: Circ.easeOut });

  closedNav.style.display = 'block';
  openNav.style.display = 'none';
  navItems.style.display = 'none';
  nav.style.height = 'auto';
}

const nav = document.querySelector('.nav-bar');
const navItems = document.querySelector('nav');

const closedNav = document.querySelector('.closed');
const openNav = document.querySelector('.open');

console.log(navItems);
console.log(closedNav);
console.log(openNav);

closedNav.addEventListener('click', toggleMenuOn);
openNav.addEventListener('click', toggleMenuOff);

class Tab {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.buttonElement = document.querySelector(
      `.button[data-tab='${this.data}']`
    );
    this.tabElement = document.querySelector(`.tab[data-tab='${this.data}']`);
    this.tabContent = new TabContent(this.tabElement);
    this.element.addEventListener('click', () => {
      this.click();
    });
  }

  click() {
    const tabs = document.querySelectorAll('.button');
    Array.from(tabs).forEach(tab => {
      tab.style.background = '#FFF';
      tab.style.color = '#222222';
    });
    this.element.style.background = '#5e9fb9';
    this.element.style.color = '#FFF';
    this.tabContent.select();
  }
}

class TabContent {
  constructor(element) {
    this.element = element;
  }

  select() {
    const content = document.querySelectorAll('.tab');
    Array.from(content).forEach(tab => {
      tab.style.display = 'none';
    });
    this.element.style.display = 'flex';
  }
}

let buttons = document.querySelectorAll('.button');

buttons = Array.from(buttons).map(button => new Tab(button));

let radioButtons = document.querySelectorAll('.custom-radio');
radioButtons = Array.from(radioButtons);
radioButtons.forEach(button => {
  button.addEventListener('click', function radioButtonClick(event) {
    radioButtons.forEach(button => (button.style.background = 'white'));
    event.target.style.background = '#5e9fb9';
  });
});
