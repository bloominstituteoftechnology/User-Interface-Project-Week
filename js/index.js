// JS goes here

//Tab Navigator JS
class LinkCreator {
    constructor(linkItem){
        this.link = linkItem;
        this.linkData = this.link.dataset.tab;
        

        this.link.addEventListener('click', () => {
            this.linkClick();
        });

        


        this.tabContent = document.querySelector(`.content[data-tab="${this.linkData}"]`);

        this.tabContent = new Content(this.tabContent);

    }
    linkClick() {
        this.tabContent.toggleContent()

        
    }
}
class Content {
    constructor(tabContent){
        this.tabContent = tabContent;
    }

    toggleContent() {
        this.tabContent.classList.toggle('tab-toggle');
    }
}



let links = document.querySelectorAll('.link');
links = Array.from(links).map( linkItem => new LinkCreator(linkItem));

















//navigation JS
const hamburger = document.querySelector('.hamburger');















hamburger.addEventListener('click', () => {

});