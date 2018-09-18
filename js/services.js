class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
  this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
  this.tabItem = new TabItem(this.itemElement);
this.element.addEventListener('click', () => {this.select()});
};

select() {
    const links  = document.querySelectorAll('.tabs-link');
links.forEach(item => item.classList.remove("selected"));
this.element.classList.add("selected");;
this.tabItem.select();

  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const tabs = document.querySelectorAll('.tabs-item');
    tabs.forEach(item => item.style.display = 'none');
    this.element.style.display = 'block';
  }
}

let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map(element => new TabLink(element));

links[0].select();
//
//
// const tabs = document.querySelector(".tabs-links");
// const panels = document.querySelectorAll(".tabs-item");
//
// tabs.addEventListener('click', function(e) {
//   if (e.target.className == 'tabs-link') {
//     const targetPanel = document.querySelector(e.target.dataset.target)
// console.log(targetPanel)
//     panels.forEach(function(panel){
//       if (panel == targetPanel) {
//         panel.classList.add('active');
//       } else {
//           panel.classList.remove('active');
//         }
//       })
//     }
//   })
