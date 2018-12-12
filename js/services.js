class TabLink {
    constructor(servicetab) {
        this.servicetab = servicetab;
        this.data = this.servicetab.dataset.tab;
        this.hiddentext = document.querySelector('.SelectedText');
        this.headerElement = document.querySelector(`.TabsHeader[data-tab="${this.data}"]`);
        this.contentHeader = new TabHeader(this.headerElement);
        this.imgElement = document.querySelector(`.TabsImg[data-tab="${this.data}"]`);
        this.contentImg = new TabImg(this.imgElement);
        this.mobimgElement = document.querySelector(`.TabsMobImg[data-tab="${this.data}"]`);
        this.contentmobImg = new TabmobImg(this.mobimgElement);
        this.servicetab.addEventListener('click', () => {this.select()});
    };
    select() {
        this.hiddentext.classList.remove('SelectedText');
        const alltabs = document.querySelectorAll('.TabsLink');
        alltabs.forEach(tab => tab.classList.remove('SelectedTab'));
        this.servicetab.classList.add('SelectedTab');
        this.contentHeader.select();
        this.contentImg.select();
        this.contentmobImg.select();
    }
}

class TabHeader {
    constructor(header) {
        this.header = header;
    }
    select() {
        const allheaders = document.querySelectorAll('.TabsHeader');
        allheaders.forEach(header => header.classList.remove('SelectedContent'));
        this.header.classList.add('SelectedContent')
    }
}

class TabImg {
    constructor(Img) {
        this.Img = Img;
    }
    select() {
        const allImg = document.querySelectorAll('.TabsImg');
        allImg.forEach(Img => Img.classList.remove('SelectedContent'));
        this.Img.classList.add('SelectedContent')
    }
}

class TabmobImg {
    constructor(mobImg) {
        this.mobImg = mobImg;
    }
    select() {
        const allmobImg = document.querySelectorAll('.TabsMobImg');
        allmobImg.forEach(mobImg => mobImg.classList.remove('SelectedContent'));
        this.mobImg.classList.add('SelectedContent')
    }
}
class Dropdown {
    constructor(navbar) {
        this.navbar = navbar;
        this.hamburger = this.navbar.querySelector('.Hamburger');
        this.closemenu = this.navbar.querySelector('.CloseMenu');
        this.content = document.querySelector('.NavContainer');
        this.hamburger.addEventListener('click', () => {this.togglecontent()});
        this.closemenu.addEventListener('click', () => {this.togglecontent()});
    }
    togglecontent() {
        this.hamburger.classList.toggle('ButtonToggle');
        this.closemenu.classList.toggle('ButtonToggle');
        this.content.classList.toggle('NavToggle');
    }
}

let servicestabs = document.querySelectorAll('.TabsLink');
servicestabs.forEach(selector => new TabLink(selector));
let dropdown = new Dropdown(document.querySelector('.HeaderBar'));
