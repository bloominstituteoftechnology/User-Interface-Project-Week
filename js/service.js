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
    getText(data){
        return this.element.querySelectorAll(`div[data-tab=${data}]`);
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

        this.texts = this.parent.getText(this.btn.dataset.tab);
        this.texts = Array.from(this.texts).map(text => (new Text(text)));

        this.btn.addEventListener('click', ()=>{
            this.parent.update(this);
        })

    }
    select(){
        this.btn.classList.add('btn__active');
        this.imgs.map(img => (img.select()));
        this.texts.map(text => (text.select()));
    }
    deselect(){
        this.btn.classList.remove('btn__active');
        this.imgs.map(img => (img.deselect()));
        this.texts.map(text => (text.deselect()));
        
    }
}

class Text{
    constructor(text){
        this.text = text;
        this.text.style.position = 'absolute';
        this.text.style.top = 0;
        this.text.style.left = 0;
    }
    select(){
        TweenMax.to(this.text, 0.5, {opacity: 1, display: 'block'});

    }
    deselect(){
        TweenMax.to(this.text, 0.5, {opacity: 0, display: 'none'});
    }
}

class Img{
    constructor(img){
        this.img = img;
        this.img.style.position = 'absolute';
        this.img.style.top = 0;
        this.img.style.left = 0;
    }
    select(){
        this.img.style.zIndex = 3;
        TweenMax.to(this.img, 0.3, {opacity: 1, display: 'block', ease: SlowMo.ease.config(0.7, 0.7, false)});

    }
    deselect(){
        this.img.style.zIndex = 0;        
        TweenMax.to(this.img, 0.6, {opacity: 0, display: 'none', delay: 0.2});
    }
}

let services = document.querySelectorAll('.services');
services = Array.from(services).map(service => (new Service(service)));

