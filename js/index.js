//navbar
class Header{
    constructor(header){
        this.header = header;
        this.navBtn = this.header.querySelector('.nav-button');
        this.nav = this.header.querySelector('nav');
        this.x = false;

        this.navBtn.addEventListener('click', () => this.open());
    }
    open(){
        this.nav.classList.toggle('nav-open');
        this.header.classList.toggle('header-open');
        if(this.x){
            this.navBtn.textContent = "☰";
            this.x = false;
        }else{
            this.navBtn.textContent = "✖";
            this.x = true;
        }
        
    }
}


let header = document.querySelector('header');
header  = new Header(header);


//services tabs ========================================

class TabLink {
    constructor(element) {
      this.element = element;
      console.log(element);
      this.data = this.element.dataset.tab;
      console.log(this.data);
      this.itemElement = document.querySelector(`.content[data-tab="${this.data}"]`);
      console.log(this.itemElement);
      this.tabItem = new TabItem(this.itemElement);

      this.element.addEventListener('click', () =>  this.select() );
  
    }
    select() {
        const links = document.querySelectorAll('.tabs-link');
        Array.from(links).forEach( link => link.classList.remove('tabs-link-selected'));
        this.element.classList.toggle('tabs-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
        const items = document.querySelectorAll('.content');
        Array.from(items).forEach( item => item.classList.remove('content-selected'));
        this.element.classList.toggle('content-selected');
        // TweenMax.from(".tabs-item-selected", 1.5, {y: 50, opacity: 0});
    }
  }

let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map( link => new TabLink(link));

links[0].select();

