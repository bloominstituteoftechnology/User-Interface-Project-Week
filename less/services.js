class LinkCreator {
    constructor(linkItem) {
      this.link = linkItem;
      
      this.link.addEventListener('click', () => { this.linkClick() });
      this.link.addEventListener('mouseout', ()=> {this.mouseOut()});
     
      
      this.linkData = this.link.dataset.tab;        
      this.tabContent = document.querySelector(`.tabitem[data-tab="${this.linkData}"]`);
      
      this.tabContent = new Content(this.tabContent);
    }
    
    linkClick() {
      console.log('This worked!');
      this.tabContent.toggleContent();
    }
    mouseOut() {
      this.tabContent.away();
    }
  }
  
  class Content {
    constructor(tabContent) {
      console.log(tabContent);
      this.tabContent = tabContent;
    }
    
    toggleContent() {
      this.tabContent.classList.toggle('tab-toggle');
      console.log(event.currentTarget);
    }
    away() {
      this.tabContent.classList.remove('tab-toggle');
    }
  }
  
  
  let links = document.querySelectorAll('.link');
  
  links = Array.from(links).map( linkItem => new LinkCreator(linkItem));
  