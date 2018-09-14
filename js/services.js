class TabLink {
    constructor(el) {
        this.el = el;

        //get data attribute for tabs
        this.data = this.el.dataset.tab;

        //get img with matching data attribute
        this.img = document.querySelector(`.tab-img[data-tab="${this.data}"]`);

        //get the mobile img with matching data attibute
        this.mobileImg = document.querySelector(`.mobile[data-tab="${this.data}"]`);

        //create new instance of tab picture class using matching attribute for img and mobile
        this.desktop = new TabPic(this.img);
        this.mobile = new TabPic(this.mobileImg);

        //capture header class to change text
        this.header = document.querySelector(".content-header");

        //add event listener for click
        this.el.addEventListener("click", () => {
            this.select();
        })
    }
    select() {
        //switch header based on data-tab
        if(this.data === "1"){
            this.header.innerHTML = "Pre-Construction";
        }else if(this.data === "2"){
            this.header.innerHTML = "Construction";
        }else if(this.data === "3"){
            this.header.innerHTML = "Design Build";
        }else{
            this.header.innerHTML = "Sustainability";
        }
        //run select on TabPic classes
        this.desktop.display();
        this.mobile.mobileDisplay();
    }
}

class TabPic {
    constructor(el) {
        this.el = el;
    }
    display() {
        //grab nodelist of images for desktop
        const desktopImg = document.querySelectorAll(".tab-img");
        
        //for each adds hidden class to all images
        desktopImg.forEach((img) => {
            img.classList.add("hidden");
        })

        //remove hidden class from current img
        this.el.classList.remove("hidden");
    }
    mobileDisplay() {
        //grab nodelist of images for mobile
        const mobileImg = document.querySelectorAll(".mobile");

        //add hidden to all mobile pictures
        mobileImg.forEach((img) => {
            img.classList.add("hidden");
        })
        //remove hidden from current mobile selection
        this.el.classList.remove("hidden");
    }
}

//link to all .tabs in the .tab-header class
let headers = document.querySelectorAll(".tab");
//pass tabs to array to convert node list to array
headers = Array.from(headers).map(link => new TabLink(link));
//start on pre-construction
headers[0].select();