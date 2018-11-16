// services

class Tab {
  constructor(link) {
    this.link = link;
    // console.log(this.link);
    this.data = this.link.dataset.tab;
    // console.log(this.data);
    this.content = document.querySelector(
      `.clickContent[data-tab='${this.data}']`,
    );
    // console.log(this.content);
    this.contentItem = new ContentItem(this.content);
    // console.log(this.contentItem);
    this.link.addEventListener('click', () => {
      this.selectLink();
    });
  }
  selectLink() {
    const links = document.querySelectorAll('.links');
    links.forEach(link => {
      link.classList.remove('selected');
    });
    this.link.classList.add('selected');
    this.contentItem.selectContent();
  }
}

class ContentItem {
  constructor(contentItem) {
    this.contentItem = contentItem;
  }

  selectContent() {
    const allContent = document.querySelectorAll('.clickContent');
    allContent.forEach(content => {
      content.classList.add('hidden');
    });
    this.contentItem.classList.remove('hidden');
    TweenLite.fromTo(this.contentItem, 1.7, {opacity: 0.3}, {opacity: 1});
  }
}

// navigation

class Dropdown {
  constructor(menu) {
    this.menu = menu;
    // console.log(this.menu);
    this.button = this.menu.querySelector('.nav-button');
    // console.log(this.button);
    this.button.addEventListener('click', () => {
      this.show();
    });
  }
  show() {
    const menu = this.menu;
    const menuButton = document.querySelector('.nav-button');
    const links = document.querySelectorAll('.navMenu');
    links.forEach(link => {
      link.classList.toggle('hidden');
    });
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
      menuButton.src = 'img/nav-hamburger-close.png';
      TweenLite.fromTo(menu, 1, {height: 0}, {height: '100vh'});
    } else {
      menuButton.src = 'img/nav-hamburger.png';
      TweenLite.fromTo(menu, 1, {height: '100vh'}, {height: 40});
    }
  }
}

let links = document.querySelectorAll('.links').forEach(link => {
  return new Tab(link);
});

let backgroundImage = document.querySelector('header');
let title = document.querySelector('title');
let navMenu = document.querySelector('.navigation');
let width = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0,
);

new Dropdown(navMenu);

if (title.innerText == 'Services') {
  backgroundImage.style.background =
    "no-repeat url('img/services/services-jumbotron.png')";
  backgroundImage.style.height = '280px';
}

if (width <= 500) {
  let pics = document.querySelectorAll('.introPics');
  pics.forEach(pic => {
    if (pic.classList.contains('desktop')) {
      pic.classList.add('hidden');
    }
    if (pic.classList.contains('mobile')) {
      pic.classList.remove('hidden');
    }
  });
}
