class TabTag {
    constructor(tabX){
        this.tabX = tabX;
        this.tabData = tabX.dataset.tab;
        this.content = document.querySelector(`.content[data-tab='${this.tabData}']`);
        this.content = Array.from(this.content).map(x => new Content(x));
        tabX.addEventListener('click', () => this.selectTab());
    }
    selectTab(){
        // const clear = document.querySelectorAll('.tab-tag');
        // clear.forEach(x => x.classList.remove('active'));
        const hider = document.querySelectorAll('.content');
        hider.forEach(y => y.classList.remove('hidden'));
        hider.forEach(y => y.classList.add('hidden'));
        // this.tabX.classList.remove('hidden');
        // this.tabX.classList.add('active');
        this.content.forEach(y => y.selectContent());
        console.log('pow');
    }
}

class Content{
    constructor(contentY){
        this.contentY = contentY;
    }
    selectContent(){
        this.contentY.classList.remove('hidden');
        console.log('boom');
    }
}

let tabs = document.querySelectorAll('.tab-tag').forEach(x => new TabTag(x));