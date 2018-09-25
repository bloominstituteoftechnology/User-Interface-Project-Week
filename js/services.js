class TabNav {
    constructor(tabLinks, tabContent) {
        this.tabLinks = Array.from(tabLinks).map((eachTab) => {
            eachTab.addEventListener('click', (event) => this.updateActive(event.target));
            return eachTab;
        });
        this.tabContent = tabContent;
        this.activeTab = this.tabLinks[0];
        this.activeContent = this.tabContent.querySelector("[data-content='0']");
        this.init();
    };

    init() {
        this.activeTab.classList.add('tab_selected');
        this.activeContent.classList.add('tab-content_revealed');
    };


    updateActive(selectedTab) {
        this.activeTab.classList.remove('tab_selected');
        this.activeTab = selectedTab;
        this.activeTab.classList.add('tab_selected');

        const tabNumber = this.activeTab.dataset.tab;
        const selectedContent = this.tabContent.querySelector(`[data-content=${tabNumber}]`);

        this.activeContent.classList.remove('tab-content_revealed');
        this.activeContent = selectedContent;
        this.activeContent.classList.add('tab-content_revealed');




    };
};

const tabLinks = document.querySelectorAll('.each-tab');
const tabContent = document.querySelector('.all-tab-content');
let tabNav = new TabNav(tabLinks, tabContent);