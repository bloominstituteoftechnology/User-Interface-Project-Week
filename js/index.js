let selectBackground = document.querySelectorAll('.backgroundChange')


class TabLink {
    constructor(link) {
        this.link = link;
        this.linkData = this.link.dataset.tab;
        this.tabContent = document.querySelector(`.middlePara[data-tab='${this.linkData}']`);
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


//color switch function for tabs
// let newColor = document.querySelector('.backgroundChange').style.background = "#FFF"


// function changeColor() {
//     if (newColor == "document.querySelector('.backgroundChange').style.background = '#FFF'") {
//         document.querySelector('.backgroundChange').style.background = "#5E9FB9"
//         newColor = document.querySelector('.backgroundChange').style.background = "#5E9FB9"
//     } else if ( newColor == "document.querySelector('.backgroundChange').style.background = '#5E9FB9'") {
//         document.querySelector('.backgroundChange').style.backgroundr = "#222222"
//         newColor = document.querySelector('.backgroundChange').style.background = "#222222"
//     }
// }