class Carousel{
    constructor(element){
        this.element = element;
        this.imgs = this.element.querySelectorAll('img');
        this.rightArrow = this.element.querySelector('.right-button');
        this.leftArrow = this.element.querySelector('.left-button');
        this.pause = this.element.querySelector('.pause');
        this.play = this.element.querySelector('.play');

        this.imgs = Array.from(this.imgs).map(img => (new Img(img)));
        this.active = this.imgs[0];
        this.current = 0;

        this.rightArrow.addEventListener('click', this.nextImg.bind(this));
        this.leftArrow.addEventListener('click', this.prevImg.bind(this));
        // this.pause.addEventListener('click', this.stopAutoPlay.bind(this));
        // this.play.addEventListener('click', this.autoPlay.bind(this));
        this.init();

        this.timer = setInterval(()=>{
            carousels[0].nextImg();
        }, 3000)

    }
    init(){
        this.active.select();
        this.timer;
    }
    update(number){
        this.active.deselect();
        this.active = this.imgs[number];
        this.init();       
    }
    nextImg(){
        if(this.current === (this.imgs.length - 1)){
            this.current = 0;
        }else{
            this.current ++;
        }
        this.update(this.current);
    }
    prevImg(){
        if(this.current === 0){
            this.current = this.imgs.length - 1;
        }else{
            this.current --;
        }
        this.update(this.current);
    }
    stopAutoPlay(){
        clearInterval(this.timer); 
        this.pause.innerHTML = 'Paused';
    }

    autoPlay(){
        
        this.stopAutoPlay();
        this.pause.innerHTML = 'Pause';
        console.log(this.pause.value);

        this.timer = setInterval(()=>{
            carousels[0].nextImg();
        }, 3000)
        this.timer;
        
    }

}

class Img{
    constructor(element){
        this.element = element;
    }
    select(){
        this.element.style.display = 'block';
    }
    deselect(){
        this.element.style.display = 'none';

    }
}
let carousels = document.querySelectorAll('.carousel');
console.log(carousels);
carousels = Array.from(carousels).map(carousel => (new Carousel(carousel)));
console.log(carousels);


