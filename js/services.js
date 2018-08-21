// *** Services JS ***

class MenuButton {
  constructor(btn){
    this.btn = btn;
    this.btnData = this.btn.dataset.btn;
    this.img = document.querySelector(`.construction-img[data-img="${this.btnData}"`);
    this.btnClick = this.btn.addEventListener('click', () => {
      const allImgs = Array.from(document.querySelectorAll('.construction-img'));
      allImgs.map(img => img.classList.add('hide'));
      this.img.classList.remove('hide');
      buttons.map(btn => btn.classList.remove('btn-color'));
      this.btn.classList.add('btn-color');
    })
  }
}

const buttons =  Array.from(document.querySelector('.serv-include-btns').children);
buttons.map(btn => new MenuButton(btn));