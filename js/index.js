// // // JS goes here
class ImgLink {
  constructor(element){
    this.element = element;
    this.imgData = this.element.dataset.img; 

    this.images = document.querySelectorAll(`.menu-content[data-img = "${this.imgData}"]`);

    this.images = Array.from(this.images).map(image => new ImgCard(image));

    this.element.addEventListener('click', ()=> {this.selectImg()
  });
}

  selectImg(){
    const imgs = document.querySelectorAll('.hamburger-img');

    imgs.forEach(function(item){
      item.classList.remove('display3')
    });

    this.element.classList.add('display3');

    const images = document.querySelectorAll('.menu-content');

    images.forEach(function(item){
      item.style.display = 'none';
    });

    this.images.forEach(image => image.selectImage());
  }
}

class ImgCard {
  constructor(element){
    this.thisElement = element;
  }
  selectImage(){
    this.thisElement.style.display = null;
  }

}

let imgs = document.querySelectorAll('.hamburger-img');
imgs = Array.from(imgs).map(img => new ImgLink(img));
imgs[0].selectImg();

// this works for now

// const toggleMenu = () => { 
//     menu.classList.toggle('menu--open')
//   }

//     const menu = document.querySelector('.menu-content');

//     const menuButton = document.querySelector('.hamburger-img');

// menuButton.addEventListener('click',event => {
//     toggleMenu()
//   });

 
// this is the Home nav JS ^^^

// class TabLink {
//   constructor(element){
//     this.element = element;
//     this.tabData = this.element.dataset.tab; 

//     this.cards = document.querySelectorAll(`.middle-four-nav[data-tab = "${this.tabData}"]`);

//     this.cards = Array.from(this.cards).map(card => new TabCard(card));

//     this.element.addEventListener('click', ()=> {this.selectTab()
//   });
// }

//   selectTab(){
//     const tabs = document.querySelectorAll('.button2');

//     tabs.forEach(function(item){
//       item.classList.remove('active-tab')
//     });

//     this.element.classList.add('active-tab');

//     const cards = document.querySelectorAll('.middle-four-nav');

//     cards.forEach(function(item){
//       item.style.display = 'none';
//     });

//     this.cards.forEach(card => card.selectCard());
//   }
// }

// class TabCard {
//   constructor(element){
//     this.thisElement = element;
//   }
//   selectCard(){
//     this.thisElement.style.display = null;
//   }

// }

// let tabs = document.querySelectorAll('.button2');
// tabs = Array.from(tabs).map(tab => new TabLink(tab));
// tabs[0].selectTab();