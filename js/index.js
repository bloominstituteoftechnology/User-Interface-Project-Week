// JS goes here

//JS for expanded nav

document.querySelector('.nav-btn').addEventListener('click', function(e){
  if(e.target.getAttribute("src")==="img/nav-hamburger-close.png"){
    document.querySelector('.menu-layover').style.display="none";
    e.target.setAttribute("src", "img/nav-hamburger.png");
  }else{
    e.target.setAttribute("src", "img/nav-hamburger-close.png");
    document.querySelector('.menu-layover').style.display = "flex";
  }
});


//JS for Services Tab navigatorTabs
class Tab{
  constructor(tab){
    this.tab = tab;
    this.data = this.tab.dataset.tab;
    console.log(this.data);
    this.content = new TabContent(document.querySelector(`.navContent[data-tab="${this.data}"]`));
    this.tab.addEventListener('click', () => this.select());
  }
  select(){
    Array.from(tabs).forEach(tab=>{
      tab.classList.remove('selected');
    });
    this.tab.classList.add('selected');
    this.content.showContent();
  }
}

class TabContent{
  constructor(tabContent){
    this.tabContent = tabContent;
  }

  showContent(){
    const tabContent = document.querySelectorAll('.navContent');
    Array.from(tabContent).forEach(tabContent => tabContent.classList.remove('navContSelected'));
    this.tabContent.classList.add('navContSelected');
  }
}


const tabs = document.querySelectorAll('.tab');
console.log(tabs);
tabs.forEach(tab => new Tab(tab));
