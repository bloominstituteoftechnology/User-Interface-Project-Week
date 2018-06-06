class Service{

    constructor(element){

        this.element = element;

        this.buttons = this.element.querySelectorAll('.btn');

        this.buttons = Array.from(this.buttons).map(button => (new Button(button, this)));        

        this.active = this.buttons[0];

        this.init();

    }

    init(){

        this.active.select();

    }

    getImage(data){

        return this.element.querySelectorAll(`img[data-tab=${data}]`);

    }

    update(element){

        this.active.deselect();

        this.active = element;

        this.active.select();

    }

}



class Button{

    constructor(btn, parent){

        this.btn = btn;

        this.parent = parent;

        this.imgs = this.parent.getImage(this.btn.dataset.tab)

        this.imgs = Array.from(this.imgs).map(img => (new Img(img)));



        this.btn.addEventListener('click', ()=>{

            this.parent.update(this);

        })



    }

    select(){

        this.btn.classList.add('btn__active');

        this.imgs.map(img => (img.select()));

    }

    deselect(){

        this.btn.classList.remove('btn__active');

        this.imgs.map(img => (img.deselect()));

    }

}



class Img{

    constructor(img){

        this.img = img;

    }

    select(){

        this.img.style.display = 'block';

    }

    deselect(){

        this.img.style.display = 'none';

    }

}



let services = document.querySelectorAll('.services');

services = Array.from(services).map(service => (new Service(service)));
