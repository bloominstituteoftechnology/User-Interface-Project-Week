import Tab from '../tab/js/tab.js';
import Page from '../page/js/page.js';

function TabPages(element, data) {
  this.element = element;

  this.component = document.createElement('div');
  this.component.classList.add('tab-pages');
  this.element.appendChild(this.component);


  // Tab container
  this.tabContainer = document.createElement('div');
  this.tabContainer.classList.add('tab-container');
  this.component.appendChild(this.tabContainer);

  // Page container.
  this.pageContainer = document.createElement('div');
  this.pageContainer.classList.add('page-container');
  this.component.appendChild(this.pageContainer);


    // Initialize component.
    this.initComponent(this.tabContainer, this.pageContainer, data);



}

TabPages.prototype.initComponent = function(tabCtr, pageCtr, data) {

  data.forEach(function(obj) {

    const tab = new Tab(tabCtr, obj.label);
    const page = new Page(pageCtr, obj.label, obj.text, obj.imgSrc);

  });

}
export default TabPages;
