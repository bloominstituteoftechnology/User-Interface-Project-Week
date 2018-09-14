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
    // this.data =
  }

  selected() {
    tabs.forEach(tab => tab.element.classList.remove('selected'));
    this.element.classList.add('selected');
  }
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(tab => new Tab(tab));

tabs[0].selected();
