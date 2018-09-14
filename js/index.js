// JS goes here
let nav = document.querySelector('.top-bar nav');
let navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click', function(event) {
  nav.classList.toggle('hide');
  if (
    event.currentTarget.innerHTML ===
    '<img src="img/nav-hamburger-close.png" alt="Nav Button">'
  ) {
    event.currentTarget.innerHTML =
      '<img src="img/nav-hamburger.png" alt="Nav Button">';
  } else {
    event.currentTarget.innerHTML =
      '<img src="img/nav-hamburger-close.png" alt="Nav Button">';
  }
});

// JS for services page
class Tab {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
      this.selected();
    });
    this.data = this.element.dataset.tab;
    console.log(this.data);
    this.componentElement = document.querySelector(
      `.component[data-content="${this.data}"]`
    );
    this.componentItem = new TabComponent(this.componentElement);
    console.log(this.componentElement);
  }

  selected() {
    tabs.forEach(tab => tab.element.classList.remove('selected'));
    this.element.classList.add('selected');
    this.componentItem.selected();
  }
}

class TabComponent {
  constructor(element) {
    this.element = element;
  }

  selected() {
    let components = document.querySelectorAll('.component');
    components = Array.from(components).forEach(item =>
      item.classList.add('hide')
    );
    this.element.classList.remove('hide');
  }
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(tab => new Tab(tab));

tabs[0].selected();
