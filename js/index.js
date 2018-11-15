// JS goes here
class Navigation{
    constructor(navItem){
        this.navItem = navItem;
        this.menu = this.navItem.querySelector('.menu');
        this.menuButton = this.navItem.querySelector('.menu-button');
        this.menuClose = this.navItem.querySelector('.menu-close');

        this.menuButton.addEventListener('click',()=>{
            this.menuSlide();
        });
        this.menuClose.addEventListener('click',()=>{
            this.menuSlide();
        });
        


    }
    menuSlide(){
        this.menu.classList.toggle('menu-open');
        this.menuButton.classList.toggle('buttonClosed');
        this.menuClose.classList.toggle('buttonClosed');
    };

}

let navigation = document.querySelectorAll('.navigation');
navigation = Array.from(navigation);

navigation.map((navItem)=>{
    return new Navigation(navItem);
})

// let menu = document.querySelector('.menu');
// let menuButton = document.querySelector('.menu-button');
// let menuClose = document.querySelector('.menu-close')

// menuButton.addEventListener('click',(event)=>{
//     menu.classList.toggle('menu-open');
//     menuButton.classList.toggle('buttonClosed');
//     menuClose.classList.toggle('buttonClosed');
// });

// menuClose.addEventListener('click',(event)=>{
//     menu.classList.toggle('menu-open');
//     menuButton.classList.toggle('buttonClosed');
//     menuClose.classList.toggle('buttonClosed');
// });