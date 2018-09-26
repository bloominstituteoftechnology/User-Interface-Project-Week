

//== Tabs Component ============================================================

let Tabs = (() => {
//-- Opened Component Namespace ------------------

    class Tabs {
        constructor (containerElement){
            this.element = containerElement;
            this.currentTabId = null;
            //
            let firstTabId;
            this.tabLinks = {};
            this.element.querySelectorAll('.tab').forEach(tabElement => {
                let newLink = new TabLink(tabElement, this);
                this.tabLinks[newLink.tabId] = newLink;
                if(!firstTabId){
                    firstTabId = newLink.tabId;
                }
            });
            //
            this.tabContents = {};
            this.element.querySelectorAll('.tab-content').forEach(contentElement => {
                let newContent = new TabContent(contentElement);
                this.tabContents[newContent.tabId] = newContent;
            });
            //
            this.select(firstTabId);
        }
        select(tabId){
            let selectLink    = this.tabLinks   [tabId            ];
            let selectContent = this.tabContents[tabId            ];
            let oldLink       = this.tabLinks   [this.currentTabId];
            let oldContent    = this.tabContents[this.currentTabId];
            if(!selectLink || !selectContent){ return;}
            if(oldLink      ){ oldLink      .unselect();}
            if(oldContent   ){ oldContent   .hide    ();}
            if(selectLink   ){ selectLink   .select  ();}
            if(selectContent){ selectContent.show    ();}
            this.currentTabId = tabId;
        }
    }
    class TabLink {
        constructor (containerElement, tabsParent){
            this.element = containerElement;
            this.tabId = this.element.dataset.tab;
            this.element.addEventListener('click', clickEvent => {
                tabsParent.select(this.tabId);
            });
        }
        select(){
            this.element.classList.add('selected');
        }
        unselect(){
            this.element.classList.remove('selected');
        }
    }
    class TabContent {
        constructor (containerElement){
            this.element = containerElement;
            this.tabId = this.element.dataset.tab;
        }
        show(){
            console.log(this.element)
            this.element.classList.add('selected');
        }
        hide(){
            this.element.classList.remove('selected');
        }
    }
    return Tabs;

//-- Closing Component Namespace -----------------
})();