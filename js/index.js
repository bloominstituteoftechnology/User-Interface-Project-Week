// JS goes here// 


//Tab menu from Services.html//


class TabLink {
    constructor (tab) {

      this.tab = tab;
      this.tabData = this.tab.dataset.tab; 
      this.tabContent = document.querySelector(`.content[data-tab="${this.tabData}"]`);
      this.tabContent = new TabContent(this.tabContent);
      this.tab.addEventListener('click', (e) => this.tabClick());
    }
     
    // method
    tabClick() {
      // toggleContent method  is toggling the classlist
      this.tabContent.toggleContent();
    }
  }
  
  
  class TabContent {
    constructor (content) {
      this.content = content
    }
    // this method that actually changes the classList
    toggleContent () {
      document.querySelectorAll('.tabContent .content').forEach(content => {
        content.classList.remove('active')
      })
      this.content.classList.toggle('active')
    }
  }
  
  const tabs = document.querySelectorAll('.tabLinks .link').forEach(tab => new TabLink(tab));
  

 // const classNameTabs = document.getElementsByClassName('link')

