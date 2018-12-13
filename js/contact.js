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

let dropdown = new Dropdown(document.querySelector('.HeaderBar'));