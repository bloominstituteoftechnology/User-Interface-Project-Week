
class Tab {
    constructor(elem){
        this.elem = elem;
        this.btnLinks = document.querySelectorAll('.tab');
        this.btnLinks = Array.from(this.content).map(btnLink => {
            return new TabBtn(btnLink, this);
        });
        this.activeBtn = this.btn[0];
        this.init();
    }

    init(){
        this.activeBtn.select();
    }





}

class TabBtn {
    constructor(btn, parent){
        this.btn = btn;
        this.parent = parent;
    }

    select(){
        
    }
}

let tab = document.querySelectorAll('.tabs ');
tab = Array.from(tab).map((tab) => {
    return new Tab(tab);
});
console.log(tab);

