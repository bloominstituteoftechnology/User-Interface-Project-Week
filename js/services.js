///all below is my notepad
// class tabs ===> allTabs
// class topics ===> topics
// class tab ===> tab
// class cards-container ===> cards-container
// class card ===> component-content //data tab in this divide

// //my stuff from 07-17
class TabCard {
  constructor(element){
    this.element = element;
    this.name = element.innerHTML;
    // console.log(this.name);
    this.data = this.element.dataset.tab;
    // console.log(this.data);
    this.onClick(this.element);
  }
  onClick(x){
    x.addEventListener("click", function(element){
      console.log(this.name)
    x.style.color = "blue";
    });
  }
}
class ComponentBar {

}
class ComponentContent{

}

//services.js
let componentTabs = document.querySelectorAll(".tab");
// console.log(componentTabs);

componentTabs = Array.from(componentTabs);
// console.log(`${componentTabs[0]} 1`);

componentTabs = componentTabs.map( x => new TabCard (x))

// console.log(`${componentTabs[0]} 2`);
//
//
// componentTabs.forEach((element)=>{
//   addEventListener('click', function(element){
//     console.log(`${componentTabs} 3`);
// })
// });
