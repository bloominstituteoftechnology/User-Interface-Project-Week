
const hamburger = document.querySelector("#ham-closed");
const closeNav = document.querySelector("#ham-open");
const mainNav = document.querySelector(".main-nav");
const navShow = document.querySelector("#show-nav");

    hamburger.addEventListener("click", () => {
        mainNav.classList.toggle("hide-nav");
        hamburger.classList.toggle("hide-this");
        closeNav.classList.toggle("hide-hamburger");
        navShow.classList.toggle("nav");
        
        
        console.log('hi');
    });

    closeNav.addEventListener("click", () => {
        mainNav.classList.toggle("hide-nav");
        hamburger.classList.toggle("hide-this");
        closeNav.classList.toggle("hide-hamburger");
        navShow.classList.toggle("nav");
        
    })

   




    // Services page-----------------------------

    class BtnCreator {
        constructor(btnItem) {
            this.btn = btnItem;
            this.btnData = this.btn.dataset.tab;
            this.tabContent = document.querySelector(`.content[data-tab="${this.btnData}"]`);
            this.tabContent = new Content(this.tabContent);
            this.btn.addEventListener('click', () => {
                this.select()
                this.btn.style.backgroundColor = '#5E9FB9';
                this.btn.style.color = '#FFF';
            });
        };

        select() {
            const btns = document.querySelectorAll(".btn");
            btns.forEach( btn => {
                btn.classList.remove("button1-content")
            });
            this.element.classList.add("button1-content");
            this.tabItem.select();
        }
    };

    


    class Content {
        constructor(tabContent) {
            this.tabContent = tabContent;
        }
        select() {
            const items = document.querySelectorAll(".content");
            items.forEach( item => {
                item.classList.remove("tabs-item-selected");
            })
            this.tabContent.classList.add('tabs-item-selected');
        }
    }
    
    
    let btns = document.querySelectorAll(".btn");

    btns = Array.from(btns).map( btnItem => new BtnCreator(btnItem));
