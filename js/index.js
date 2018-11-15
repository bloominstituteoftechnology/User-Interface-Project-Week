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
  }
}

let links = document.querySelectorAll('.links').forEach(link => {
  return new Tab(link);
});

let backgroundImage = document.querySelector('header');
let title = document.querySelector('title');

if ((title = 'Services')) {
  backgroundImage.style.background =
    "no-repeat url('img/services/services-jumbotron.png')";
  backgroundImage.style.height = '280px';
}
