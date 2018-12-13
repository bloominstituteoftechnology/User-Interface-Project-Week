class TabLink {
    constructor(tabsLink) {
      this.tabsLink = tabsLink;
      
      this.tabsLinkData = this.tabsLink.dataset.tab;
          
      this.tabsContent = document.querySelector(`.about-tabs-item[data-tab="${this.tabsLinkData}"]`);
      
      this.tabsContent = new TabItem(this.tabsContent);
      
      this.tabsLink.addEventListener('click', () => {this.select()});
    };
  
    select() {
      const links = document.querySelectorAll('.about-tabs-link');
  
      Array.from(links).forEach(link => link.classList.remove('about-tabs-link-selected'));
  
      this.tabsLink.classList.add('about-tabs-link-selected');
      
      this.tabsContent.select(this.tabsContent);
    }
  }
  
  class TabItem {
    constructor(tabsContent) {
      this.tabsContent = tabsContent;
    }
  
    select() {
      const items = document.querySelectorAll('.about-tabs-item');
  
      Array.from(items).forEach(item => item.classList.remove('about-tabs-item-selected'));
      
      this.tabsContent.classList.add('about-tabs-item-selected');
    }
  }
  
  const links = document.querySelectorAll('.about-tabs-link');
  links.forEach( tabsLink => new TabLink(tabsLink));