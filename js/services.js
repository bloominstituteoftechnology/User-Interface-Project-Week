
class Tab {
    constructor(elem){
        this.elem = elem;
        this.btnLinks = document.querySelectorAll('.tab');
        this.btnLinks = Array.from(this.btnLinks).map((btnLink) => {
            return new TabBtn(btnLink, this);
        });
        this.activeBtn = this.btnLinks[0];
        this.init();
    }

    init(){
        this.activeBtn.select();
    }

    getContent(data){
        return document.querySelectorAll(`.tab-content[data-content=${data}]`);
    }

    updateActive(nuActive){
        this.activeBtn.deselect();
        this.activeBtn = nuActive;
    }


}

class TabBtn {
    constructor(btn, parent){
        this.btn = btn;
        this.parent = parent;
        this.btnContents = this.parent.getContent(this.btn.dataset.content);
        this.btnContents = Array.from(this.btnContents).map((btnContent)=>{
            return new BtnContent(btnContent);
        });
        this.btn.addEventListener('click', () => {
            this.select();
            this.parent.updateActive(this);
        });
    }

    select(){
        this.btn.classList.add('active-tab');
        this.btnContents.forEach((content) => {content.selectContent()});
    }

    deselect(){
        this.btn.classList.remove('active-tab');
        this.btnContents.forEach((content)=>{content.deselectContent()});
    }
}

class BtnContent {
    constructor(btn){
        this.btnContent = btn;
        console.log("btn Content ", this.btnContent);
        
    }

    selectContent(){
        this.btnContent.classList.add('selected-content');
    }
    deselectContent(){
        this.btnContent.classList.remove('selected-content');
    }
}

let tab = document.querySelectorAll('.tabs');
tab = Array.from(tab).map((tab) => {
    return new Tab(tab);
});
console.log(tab);

