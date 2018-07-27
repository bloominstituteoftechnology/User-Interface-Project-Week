class TabNav {
    constructor(tabLinks, tabContent) {
      this.tabLinks = Array.from(tabLinks).map((eachTab) => {
        eachTab.addEventListener('click', (event) =>
          this.updateActive(event.target)
        );
        return eachTab;
      });
      this.tabContent = tabContent;
      this.activeTab = this.tabLinks[0];
      this.activeContent = this.tabContent.querySelector("[data-content='0']");
      this.init();
    }
  
    init() {
      this.activeTab.classList.add('tab_selected');
      this.activeContent.classList.add('tab-content_revealed');
    }
  
    updateActive(selectedTab) {
      this.activeTab.classList.remove('tab_selected');
      this.activeTab = selectedTab;
      this.activeTab.classList.add('tab_selected');
  
      let tabNumber = this.activeTab.dataset.tab;
      let selectedContent = this.tabContent.querySelector(
        `[data-content='${tabNumber}']`
      );
  
      this.activeContent.classList.remove('tab-content_revealed');
      this.activeContent = selectedContent;
      this.activeContent.classList.add('tab-content_revealed');
    }
  }
  
  const tabLinks = document.querySelectorAll('.each-tab');
  const tabContent = document.querySelector('.all-tab-content');
  let tabNav = new TabNav(tabLinks, tabContent);
  
  // class TabNav {
  //   constructor(links, content) {
  //     this.links = links;
  //     this.content = content;
  //     this.links = this.links.map((eachLink) => new TabLink(eachLink, this));
  //     this.activeLink = this.links[0].element;
  //     this.activeContent = this.content[0];
  //     this.init();
  //   }
  
  //   init() {
  //     this.activeLink.classList.add('tab_selected');
  //     this.activeContent.classList.add('tab-content_revealed');
  //   }
  
  //   updateActive(newLink, newContent) {
  //     this.activeLink.classList.remove('tab_selected');
  //     this.activeLink = newLink;
  //     this.activeLink.classList.add('tab_selected');
  
  //     this.activeContent.classList.remove('tab-content_revealed');
  //     this.activeContent = newContent;
  //     this.activeContent.classList.add('tab-content_revealed');
  //   }
  // }
  
  // class TabLink {
  //   constructor(element, parent) {
  //     this.element = element;
  //     this.parent = parent;
  //     this.element.addEventListener('click', this.onClick.bind(this));
  //   }
  
  //   onClick() {
  //     const data = this.element.dataset.tab;
  //     this.parent.updateActive(this.element, this.parent.content[data]);
  //   }
  // }
  
  // const tabLinks = Array.from(document.querySelectorAll('.tabs .each-tab'));
  // const tabContent = Array.from(document.querySelectorAll('.tab-content'));
  
  // const tabNav = new TabNav(tabLinks, tabContent);