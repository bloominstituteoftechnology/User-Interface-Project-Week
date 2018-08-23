
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
            this.btn.addEventListener('click', () => {
                this.btnClick()
            });
            this.btnData = this.btn.dataset.tab;
            this.tabContent = document.querySelector(`.content[data-tab="${this.btnData}"]`);

            this.tabContent = new Content(this.tabContent);
        }

        btnClick() {
            console.log('This worked!');
            this.tabContent.toggleContent();
        }
    }

    class Content {
        constructor(tabContent) {
            console.log(tabContent);
            this.tabContent = tabContent;
        }
        toggleContent() {
            this.tabContent.classList.toggle("hide-this");
        }
    }
    
    
    let btns = document.querySelectorAll(".btn");

    btns = Array.from(btns).map( btnItem => new BtnCreator(btnItem));
