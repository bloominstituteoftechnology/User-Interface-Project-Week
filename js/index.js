//Tab Component Services Page
class TabItem {
    constructor(link) {
        this.link = link;
        this.linkId = this.link.dataset.tab;
        this.tabLink = document.querySelector(`.tab-link[data-tab='${this.linkId}']`);
        this.linkItem = document.querySelector(`.tab-item[data-tab='${this.linkId}']`);
        this.link.addEventListener('click', (e) => {
            this.renderTab(e);
            this.linkId = e.target.linkId;
        });

    }

    renderTab(e) {
        let tabLinks = document.querySelectorAll('.tab-link');
        tabLinks.forEach( item => item.classList.remove('active'));
        let tabitems = document.querySelectorAll('.tab-item');
        tabitems.forEach(item => item.classList.add('hide'));
        this.linkId = e.target.linkId;
        this.tabLink.classList.add('active');
        this.linkItem.classList.remove('hide');

    }


}

let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map(link => new TabItem(link));

//Nav Open and Close
const hamburger = document.querySelector('.nav-hamburger');
const exitIcon = document.querySelector('.exit-icon');
const navPage = document.querySelector('.nav-page');
const header = document.querySelector('.txt-jumbo');
const main = document.querySelector('.main-content');
const footer = document.querySelector('.footer');
const container = document.querySelector('.container');
const mainSvc = document.querySelector('.main-content-svc');
const logoNav = document.querySelector('.logo-nav');

let bodyToggle = () => {
    header.classList.toggle('hide');
    main.classList.toggle('.hide');
    footer.classList.toggle('.hide');
};

hamburger.addEventListener('click', (e) => {
    e.target.classList.toggle('hide');
    exitIcon.classList.toggle('hide');
    navPage.classList.toggle('hide');
    logoNav.style.visibility = "hidden";
    

});
exitIcon.addEventListener('click', (e) => {
    e.target.classList.toggle('hide');
    hamburger.classList.toggle('hide');
    navPage.classList.toggle('hide');
    logoNav.style.visibility = "visible";
});