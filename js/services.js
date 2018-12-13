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
        this.hamburger.addEventListener('click', () => {this.togglecontent()});
        this.closemenu.addEventListener('click', () => {this.untogglecontent()});
    }
    togglecontent() {
        this.hamburger.classList.toggle('ButtonToggle');
        this.closemenu.classList.toggle('ButtonToggle');
        t1.play();
        t2.play();
        t3.play();
        t4.play();
    }
    untogglecontent() {
        this.hamburger.classList.toggle('ButtonToggle');
        this.closemenu.classList.toggle('ButtonToggle');
        t1.reverse();
        t2.reverse();
        t3.reverse();
        t4.reverse();
    }
}

var t1 = new TimelineMax({paused:true});
var t2 = new TimelineMax({paused:true});
var t3 = new TimelineMax({paused:true});
var t4 = new TimelineMax({paused:true});

t1.to('#dropdown', .55, {height:'100vh'});
t2.to('#navanchor1', .35, {right:'0'});
t3.to('#navanchor2', .4, {right:'0'});
t4.to('#navanchor3', .45, {right:'0'});

let servicestabs = document.querySelectorAll('.TabsLink');
servicestabs.forEach(selector => new TabLink(selector));
let dropdown = new Dropdown(document.querySelector('.HeaderBar'));
