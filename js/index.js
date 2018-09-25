let selectBackground = document.querySelectorAll('.backgroundChange')
// for (let i = 0; i < selectBackground.length; i++){
//     selectBackground[i].addEventListener('click', () => {
//             event.target.style.background = '#5E9FB9'
//             event.target.style.color = '#FFF'
// })
// }


class TabLink {
    constructor(link) {
        this.link = link;
        this.linkData = this.link.dataset.tab;
        this.tabContent = document.querySelector(`.middlePara[data-tab='${this.linkData}']`);
        this.backgroundContent = document.querySelector(`.backgroundChange[data-tab='${this.linkData}']`);
        this.link.addEventListener('click', () => {this.linkClick()});
        this.tabContent = new Content(this.tabContent);
    }
    linkClick() {
        this.tabContent.toggleContent();
    }
}


class Content {
    constructor(tabContent){
        this.tabContent = tabContent;
    }
    toggleContent() {
        const items = document.querySelectorAll('.middlePara')
        Array.from(items).forEach((element) => element.classList.remove('change'))
        this.tabContent.classList.add('change');
    }
}




links = Array.from(selectBackground).map( link => new TabLink(link));
links[0].linkClick();