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
        const link = document.querySelectorAll('.link');
        link.forEach(tabs => {
            tabs.classList.remove('active-link')
          });
        this.link.classList.add('active-link');
        this.tabContent.toggleContent()

        
    }
}
class Content {
    constructor(tabContent){
        this.tabContent = tabContent;
    }

    toggleContent() {
        const tabs = document.querySelectorAll('.content');
        tabs.forEach(tabs => {
            tabs.classList.remove('tab-toggle')
          });
        this.tabContent.classList.add('tab-toggle');
    }
}



let links = document.querySelectorAll('.link');
links = Array.from(links).map( linkItem => new LinkCreator(linkItem));

function OpenNav(){
    document.getElementById('nav').style.width = "100%";
    document.getElementById('nav').style.height = "100%";
    document.getElementById('open').style.display = "none";
    document.getElementById('content-nav').style.display = "block";
}

function CloseNav(){
    document.getElementById('nav').style.width = "0%";
    document.getElementById('close').style.display = "none";
    document.getElementById('content-nav').style.display = "none";
}















//navigation JS
const hamburger = document.querySelector('.hamburger');















hamburger.addEventListener('click', () => {

});