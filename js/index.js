//navbar
class Header{
    constructor(header){
        this.header = header;
        this.navBtn = this.header.querySelector('.nav-button');
        this.nav = this.header.querySelector('nav');
        this.x = false;

        this.navBtn.addEventListener('click', () => this.open());
    }
    open(){
        this.nav.classList.toggle('nav-open');
        this.header.classList.toggle('header-open');
        if(this.x){
            this.navBtn.textContent = "☰";
            this.x = false;
        }else{
            this.navBtn.textContent = "✖";
            this.x = true;
        }
        
    }
}


let header = document.querySelector('header');
header  = new Header(header);

