
class Tab {
    constructor(elem){
        this.elem = elem;
        this.btnLinks = document.querySelectorAll('.tab');
        this.btnLinks = Array.from(this.btnLinks).map((btnLink) => {
            // console.log(btnLink);
            
            return new TabBtn(btnLink, this);
        });
        this.activeBtn = this.btnLinks[0];
        this.init();
    }

    init(){
        this.activeBtn.select();
    }

    updateActive(nuActive){
        this.activeBtn.deselect();
        this.activeBtn = nuActive;
    }

    getContent(data){
        return document.querySelector(`.tab-content[data-content="${data}"]`);
    }
}

class TabBtn {
    constructor(btn, parent){
        this.btn = btn;
        this.parent = parent;
        console.log("this btn", this.btn.dataset.content);
        
        this.btnContents = parent.getContent(this.btn.dataset.content);
        console.log("content", this.btnContents);
        
        this.btnContents = new BtnContent(this.btnContents);

        this.btn.addEventListener('click', () => {
            this.select();
            
        });
    }

    select(){
        this.parent.updateActive(this);
        this.btn.classList.add('active-tab');
        this.btnContents.selectContent();
    }

    deselect(){
        this.btn.classList.remove('active-tab');
        this.btnContents.deselectContent();
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

