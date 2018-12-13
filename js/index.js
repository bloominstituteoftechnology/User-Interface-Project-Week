// JS goes here

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

document.getElementById("yo1").style.color="white";
document.getElementById("yo1").style.backgroundColor="#5E9FB9"


function precon() {
    document.getElementById("precon").style.display = "flex";
    document.getElementById("cons").style.display ="none";
    document.getElementById("desi").style.display ="none";
    document.getElementById("sust").style.display ="none";

    document.getElementById("yo1").style.color="white";
    document.getElementById("yo1").style.backgroundColor="#5E9FB9"
    document.getElementById("yo2").style.color="black";
    document.getElementById("yo2").style.backgroundColor="white"
    document.getElementById("yo3").style.color="black";
    document.getElementById("yo3").style.backgroundColor="white"
    document.getElementById("yo4").style.color="black";
    document.getElementById("yo4").style.backgroundColor="white"
}

function cons() {
    document.getElementById("precon").style.display = "none";
    document.getElementById("cons").style.display ="flex";
    document.getElementById("desi").style.display ="none";
    document.getElementById("sust").style.display ="none";

    document.getElementById("yo2").style.color="white";
    document.getElementById("yo2").style.backgroundColor="#5E9FB9"
    document.getElementById("yo1").style.color="black";
    document.getElementById("yo1").style.backgroundColor="white"
    document.getElementById("yo3").style.color="black";
    document.getElementById("yo3").style.backgroundColor="white"
    document.getElementById("yo4").style.color="black";
    document.getElementById("yo4").style.backgroundColor="white"
}

function desi() {
    document.getElementById("precon").style.display = "none";
    document.getElementById("cons").style.display ="none";
    document.getElementById("desi").style.display ="flex";
    document.getElementById("sust").style.display ="none";

    document.getElementById("yo3").style.color="white";
    document.getElementById("yo3").style.backgroundColor="#5E9FB9"
    document.getElementById("yo1").style.color="black";
    document.getElementById("yo1").style.backgroundColor="white"
    document.getElementById("yo2").style.color="black";
    document.getElementById("yo2").style.backgroundColor="white"
    document.getElementById("yo4").style.color="black";
    document.getElementById("yo4").style.backgroundColor="white"
}

function sust() {
    document.getElementById("precon").style.display = "none";
    document.getElementById("cons").style.display ="none";
    document.getElementById("desi").style.display ="none";
    document.getElementById("sust").style.display ="flex";

    document.getElementById("yo4").style.color="white";
    document.getElementById("yo4").style.backgroundColor="#5E9FB9"
    document.getElementById("yo1").style.color="black";
    document.getElementById("yo1").style.backgroundColor="white"
    document.getElementById("yo2").style.color="black";
    document.getElementById("yo2").style.backgroundColor="white"
    document.getElementById("yo3").style.color="black";
    document.getElementById("yo3").style.backgroundColor="white"
}


/*
class Tab {
    constructor(tabs){
        this.tab= (tabs);

        this.tabContent= document.querySelector(`.tab-content[data-tab="${this.tab.dataset.tab}"]`);

    }
    setActive(start) {
        if (start){
            this.tab.classList.add("begin");

            this.tabContent.classList.add("begin");
        } else {
            this.tab.classList.remove("begin");
            this.tabContent.classList.remove("begin");
        }
    }
}

class TabNavigator {
    constructor(tabNavigatorName) {
        this.tabNavigator = document.querySelector(tabNavigatorName);
        this.tabs= this.tabNavigator.querySelectorAll(".tab");
        this.tabs= Array.from(this.tabs).map(tab => new Tab(tab));
        this.tabs.forEach(tab => tab.tab.addEventListener("click", element => this.select(element)));
    }

    select(element) {
        this.tabs.forEach(tab => {
            if(tab.tab.dataset.tab === element.target.dataset.tab) tab.setActive(true);
            else tab.setActive(false);
        });
    }
}

const menu = new Menu(".menu", ".menu-button");

const tabNavigator = new TabNavigator(".tab-nav");
*/

const tabNavs = new TabNavi();