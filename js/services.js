class TabTag {
    constructor(tabX){
        this.tabX = tabX;
        this.tabData = this.tabX.dataset.tab;
        this.content = document.querySelectorAll(`.content[data-tab='${this.tabData}']`);
        this.content = Array.from(this.content).map(y => new Content(y));
        // this.spot = order.indexOf(this.tabData);
        this.tabX.addEventListener('click', () => this.selectTab());
    }
    selectTab(){
        const clearTab = document.querySelectorAll('.tab-tag');
        const clearContent = document.querySelectorAll('.content');
        // let direction = '';
        clearTab.forEach(x => x.classList.remove('selected'));
        // clearContent.forEach(y => y.classList.remove('last'));
        // let old = document.querySelector('.shown');
        // let compare = order.indexOf(old.dataset.tab);
        // if (this.spot < compare){
        //     direction = 'left';
        // }
        // else if (this.spot > compare){
        //     direction = 'right';
        // }
        // old.classList.add('last')
        this.tabX.classList.add('selected');
        clearContent.forEach(y => y.classList.remove('shown'));
        clearContent.forEach(y => y.classList.add('below'));
        this.content.forEach(y => y.selectContent());
        // if (direction === 'right'){
        //     TweenMax.to(old, .3, {
        //         scaleX: 0,
        //         transformOrigin: "0 50%"
        //     })
        // }
        // else if (direction === 'left'){
        //     TweenMax.to(this.content, .3, {
        //         scaleX: 1,
        //         transformOrigin: '0 50%'
        //     })
        // }
    }
}

class Content{
    constructor(contentY){
        this.contentY = contentY;
    }
    selectContent(){
        this.contentY.classList.remove('below');
        this.contentY.classList.add('shown');
        TweenMax.to(this.contentY, .3, {
            scaleY: 1,
            transformOrigin: "50% 0"
            })
        // debugger;
    }
    // setLast(){
    //     this.contentY.classList.add('last');
    // }
}

// const order = Array.from(document.querySelectorAll('.tab-tag')).map(x => x.dataset.tab);
// console.log(order);
let tabs = document.querySelectorAll('.tab-tag').forEach(x => new TabTag(x));

// console.log(tabs.tabData);