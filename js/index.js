// JS goes here

//Tab Navigator JS
class LinkCreator {
    constructor(link){
        this.link = link;
        this.link.addEventListener('click', () => {
            
        })
    }
}



const links = document.querySelectorAll('.link');
links = Array.from(links).map( link => new LinkCreator(link));

















//navigation JS
const hamburger = document.querySelector('.hamburger');















hamburger.addEventListener('click', () => {

});