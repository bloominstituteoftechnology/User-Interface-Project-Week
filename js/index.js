

//==============================================================================

//-- Setup Main Navigation Menu ------------------
new NavMenu(document.querySelector('.main-navigation'));

//-- Setup Services Tabs -------------------------
let tabsContainer = document.querySelector('.container.services');
if(tabsContainer){
    new Tabs(tabsContainer);
}