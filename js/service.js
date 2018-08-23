//Service tabs
const timeline = new TimelineMax();




class Tab {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;

    this.tabElement = document.querySelector(`.tab[data-tab="${this.data}"]`);
    this.tabContent = new TabContent(this.tabElement);

    this.element.addEventListener('click', () => { this.clickTab() });
  }
  clickTab() {
    const tabs = document.querySelectorAll(".btn");
    
    if(this.element.className === "btn select") {
      return;
    } else {

      tabs.forEach(tab => {
        tab.classList.remove("select");
      });

      this.element.classList.add("select");
      
      this.tabContent.activate();
    }
  }
}

class TabContent {
  constructor(element) {
    this.element = element;
  }
  activate() {
    const contents = document.querySelectorAll(".tab");

    timeline.fromTo(".active", 1, {y: "0%"}, {ease: Power1.easeOut, y: "10%", opacity: 0, onComplete: () => {
      contents.forEach(content => {
        content.classList.remove("active");
      });

      this.element.classList.add("active");
    }})
    .fromTo(this.element.querySelector("h2"), 1, { x: "-50%", opacity: 0 }, { ease: Elastic.easeOut.config(1, 0.75), x: "0%", opacity: 1})
    .addLabel("imgPara",  "-=0.5")
    .fromTo(this.element.querySelectorAll("img"), 1, { y: "-50%", opacity: 0 }, { y: "0%", opacity: 1}, "imgPara")    
    .fromTo(this.element.querySelector(".tab-content"), 1, { y: "50%", opacity: 0 }, { y: "0%", opacity: 1}, "imgPara");

    TweenMax.set(this.element, { clearProps: "all" });
    
    

    
    
  }
}


let tabs = document.querySelectorAll(".btn");

tabs = Array.from(tabs).map(tab => new Tab(tab));

//tabs[0].clickTab();

//Service tabs end