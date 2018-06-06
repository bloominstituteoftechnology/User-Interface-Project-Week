// Service Page JS
class TabComp{
  constructor(element){
    this.element = element
    // console.log(this.element)

    this.links = this.element.querySelectorAll(".tab")
    // console.log(this.links)

    this.links = Array.from(this.links).map( link => {
      return new TabsLink(link,this);
    })

    // console.log(this.links[0])
    this.activeLink = this.links[0]
    
    // Nothing to update here, just notice we are invoking the init() method
    this.init();
  }

  getTab(data){
    // console.log(data)
    // console.log(this.element.querySelector(`.tab[data-tab='${data}']`), 'what getData returns')
    return this.element.querySelector(`.my-card[data-tab='${data}']`)
  }

  init() { 
    // invoke the method select() on activeLink
    this.activeLink.select();
  }

  updateActive(newActive) {
    // invoke the method deselect() on activeLink
    // console.log(newActive, 'newActive')
    this.activeLink.deselect()
    
    // assign this.activeLink to the new active link (newActive)
    this.activeLink = newActive;
  }
}

class TabsLink{
  constructor(el,parent){
    this.element = el
    // console.log(this.element)

    this.parent = parent
    // console.log(this.parent)

    // console.log(this.element.dataset.tab)
    // console.log(this.element.dataset.tab)
    // this.tabsItem = this.tabs.getTab(this.element.dataset.tab)
    this.card = this.parent.getTab(this.element.dataset.tab)
    
    // console.log(this.card)

    this.card = new Cards(this.card)

    this.element.addEventListener('click', () => {
      this.parent.updateActive(this)
      this.select();
    })
  }
  select(){
    this.element.classList.add('tabs-link-selected')
    this.card.select();

  }
  deselect(){
    this.element.classList.remove('tabs-link-selected')
    this.card.deselect();
    
  }
}


class Cards{
  constructor(el){
    this.element = el;
    // console.log(this.element)

  }

  select(){
    this.element.classList.add("my-card-selected")
  }

  deselect(){
    this.element.classList.remove("my-card-selected")
  }

}

//Get all Tabs
let tabComp = document.querySelectorAll('.tab-component');
// console.log(tabs)

//ForEach through them all and create an object for each
Array.from(tabComp).forEach( tab => new TabComp(tab));