class TabTag {
    constructor(tabX){
        this.tabX = tabX;
        this.tabData = this.tabX.dataset.tab;
        this.content = document.querySelectorAll(`.content[data-tab='${this.tabData}']`);
        this.content = Array.from(this.content).map(y => new Content(y));
        this.tabX.addEventListener('click', () => this.selectTab());
    }
    selectTab(){
        const selectClear = document.querySelectorAll('.tab-tag');
        selectClear.forEach(x => x.classList.remove('selected'));
        this.tabX.classList.add('selected');
        const hider = document.querySelectorAll('.content');
        hider.forEach(y => y.classList.remove('hidden'));
        hider.forEach(y => y.classList.add('hidden'));
        this.content.forEach(y => y.selectContent());
    }
}

class Content{
    constructor(contentY){
        this.contentY = contentY;
    }
    selectContent(){
        this.contentY.classList.remove('hidden');
    }
}

let tabs = document.querySelectorAll('.tab-tag').forEach(x => new TabTag(x));
// console.log(tabs.tabData);