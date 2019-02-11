let displayContent = function(datasetFromTab, number) {
  if (datasetFromTab === componentContent[number].dataset.tab) {
    componentContent.forEach( (x) => {
      x.classList.remove('show');
    })
    componentTabs.forEach( (x) => {
      x.classList.remove('activeTab');
    })
    componentContent[number].classList.toggle('show');
    componentTabs[number].classList.toggle('activeTab')
  }
}

let componentTabs = document.querySelectorAll(".tab");
let componentContent = document.querySelectorAll(".component-content");

componentTabs = Array.from(componentTabs);
componentContent= Array.from(componentContent);

componentTabs.forEach( (target) => {
  target.addEventListener("click", () => {
    displayContent(target.dataset.tab, componentTabs.indexOf(target));
  })
});
