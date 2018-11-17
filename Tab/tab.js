class TabLink{
    constructor(element) {

        this.selectedLink = element;

        this.data = this.selectedLink.dataset.tab;

        this.itemSelected = document.querySelector(`.tab-item[data-tab='${this.data}']`);

        this.tabItemSelected = new TabItem(this.itemSelected);//link between two class

        this.selectedLink.addEventListener("click", this.linkSelect.bind(this));
    }

    linkSelect(){
          console.log("Tab link selected");
         const links=document.querySelectorAll(".tab-link");

         links.forEach(link =>{
             link.classList.remove("tabs-link-selected")

         });
        this.selectedLink.classList.add("tabs-link-selected");
        this.tabItemSelected.tabSelect();
    }


}

class TabItem{

    constructor(element){

      this.tabSelected =element;

    }
    tabSelect(){

      const items=document.querySelectorAll(".tab-item");
      items.forEach(item =>{
          return item.classList.remove("tabs-item-selected");

      });

      this.tabSelected.classList.add("tabs-item-selected");

    }

}


let links = document.querySelectorAll(".tab-link");
Array.from(links).forEach(link =>{
    return new TabLink(link);
})

