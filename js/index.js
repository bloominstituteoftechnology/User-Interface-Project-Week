class TabLink {
  constructor(element) {
		this.element = element;
		console.log(this.element);
		this.data = this.element.dataset.tab;
		console.log(this.data);
		this.articleElement = document.querySelector(`.services-article[data-tab='${this.data}']`);
		console.log(this.articleElement);
		this.tabArticle = new TabArticle(this.articleElement);
		console.log(this.tabArticle);
    this.element = addEventListener('click', () => this.select());
  }

  select() {
		let tabs = document.querySelectorAll('.services-tab');
		console.log(tabs);
		Array.from(tabs).forEach(tab => tab.classList.remove('services-tab-selected'));
    this.element.classList.add('services-tab-selected');
    this.tabArticle.select();
  }
}

class TabArticle {
  constructor(element) {
    this.element = element;
  }

  select() {
    let tabArticles = document.querySelectorAll('.services-article');
    Array.from(tabArticles).forEach(tabArticle =>
      tabArticle.classList.remove('services-article-selected')
    );
    this.element.classList.add('services-article-selected');
  }
}

let tabs = document.querySelectorAll('.services-tab');
tabs = Array.from(tabs).map(tab => new TabLink(tab));
console.log(tabs);
tabs[0].select();
