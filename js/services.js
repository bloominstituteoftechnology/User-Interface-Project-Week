class TabLink {
    constructor(el){
        this.el = el;

        this.data = this.el.dataset.tab;

        this.header = document.querySelector(".content-header");

        this.el.addEventListener("click", () => {
            this.display();
        })
        console.log(this.el);
        console.log(this.header);
        console.log(this.data);
    }
    display() {
        if(this.data === "1"){
            this.header.innerHTML = "Pre-Construction";
        }
        else if(this.data === "2"){
            this.header.innerHTML = "Construction";
        }
        else if(this.data === "3"){
            this.header.innerHTML = "Design Build";
        }else{
            this.header.innerHTML = "Sustainability";
        }
    }
}

//link to .tab-headers
let headers = document.querySelectorAll(".tab");
headers = Array.from(headers).map(link => new TabLink(link));
//start on pre-construction
headers[0].display();