const navExpand = document.querySelector('.collapsed');
console.log(navExpand);
const navClose = document.querySelector('.expanded')
console.log(navClose);
const navMenu = document.querySelector(".navigationMenu");
console.log(navMenu);


    navExpand.addEventListener('click',()=>{
        navExpand.style.display="none";
        navClose.style.display="block";
        navMenu.classList.toggle('navHidden');
    
    })

    navClose.addEventListener('click', ()=>{
        navClose.style.display='none';
        navExpand.style.display='block';
        navMenu.classList.toggle('navHidden');
    })
    class TabLink {
        constructor(element) {
          this.element = element;
          this.data = this.element.dataset.tab
          this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
          this.tabItem = new TabItem(this.itemElement);
          this.element.addEventListener('click', () => {
            this.select()
          })
      
        };
      
      
        select() {
          const links = document.querySelectorAll('.tabs-link');
          Array.from(links).forEach((item) => {
            item.classList.remove('tabs-selected');
          });
          this.element.classList.add('gittabs-selected');
          console.log(this.element)
          console.log(links)
          let notSeen = document.querySelectorAll('.tabs-item');
          notSeen.forEach((item)=>{
            item.style = 'display: none';
          })
          
          this.tabItem.select();
        }
      }
      
      class TabItem {
        constructor(element) {
          this.element = element;

        }
      
        select() {
            let allItems = document.querySelectorAll('.tabs-item');
            Array.from(allItems).forEach((item)=>{
                item.style = 'display: none';
            });
    
            this.element.style = 'display: flex'
        }
      }
    
      let links = document.querySelectorAll(".tabs-link");
      console.log(links);
      links = Array.from(links).map(links => new TabLink(links));
      console.log(links);
      links[0].select();
      