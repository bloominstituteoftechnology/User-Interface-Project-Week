class TabNav {
    constructor(tabLink) {
        this.tabLink = tabLink;
        this.dataTab = this.tabLink.dataset.tab;
        this.tabContent = document.querySelector(`.tab-content[data-tab='${this.dataTab}']`)
        this.tabLink.addEventListener('click', (event) => {
            this.selected(event);
        })
        // this.tabLinks = Array.from(tabLinks).map((eachTab) => {
        //     eachTab.addEventListener('click', (event) => this.updateActive(event.target));
        //     return eachTab;
        // });
        // this.tabContent = tabContent;
        // this.activeTab = this.tabLinks[0];
        // this.activeContent = this.tabContent.querySelector("[data-content='0']");
        // this.init();
    };
    selected() {
        let tabContent = document.querySelectorAll('.tab-content');
        let tabLinks = document.querySelectorAll('.each-tab');

        tabLinks.forEach(tab => tab.classList.remove('tab-selected'))
        this.tabLink.classList.add('tab-selected');
        tabContent.forEach(tab => tab.classList.add('hide'))
        this.tabContent.classList.remove('hide');

    };

    // init() {
    //     this.activeTab.classList.add('tab-selected');
    //     this.activeContent.classList.add('tab-content_revealed');
    // };



};
let tabLinks = document.querySelectorAll('.each-tab');

tabLinks = [...tabLinks].map(each => new TabNav(each))
console.log(tabLinks)
tabLinks[0].selected();








// function onTabClick(event) {
//     let activeTabs = document.querySelectorAll('.each-tab');


//     activeTabs.forEach(function(tab) {
//       tab.className = tab.className.replace('each-tab', '');
//     });

//     // activate new tab and panel
//     event.target.parentElement.className += ' each-tab';
//     document.getElementById(event.target.href.split('#')[1]).className += ' each-tab';
//   }

//   const element = document.getElementById('nav-tab');

//   element.addEventListener('click', onTabClick, false);