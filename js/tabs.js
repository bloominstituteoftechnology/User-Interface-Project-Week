
 //tabs

class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.tabContainer = document.querySelector('.tabs-content');
        this.element.addEventListener('click', () => this.selectTab());
        this.tabContent = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
    }
    selectTab() {
        document.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
        
        this.element.classList.add("active");
        TweenMax.to(this.tabContainer, 1, {scale:.05, opacity:0, rotation: 360, ease:Sine.easeIn, onComplete: () => {
     document.querySelectorAll(".tab-content").forEach(x => x.classList.remove("active"));
        this.tabContent.classList.add("active");
        TweenMax.to(this.tabContainer, 1, {scale:1, opacity:1, rotation: 360, ease:Sine.easeOut});
    }});
    }
}
 let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new TabLink(tab));
tabs[0].selectTab(); 