// *** Services JS ***

class MenuButton {
  constructor(btn){
    this.btn = btn;
    this.btnData = this.btn.dataset.btn;
    this.img = document.querySelector(`.construction-img[data-img="${this.btnData}"`);
    this.btnClick = this.btn.addEventListener('click', () => {
      const allImgs = Array.from(document.querySelectorAll('.construction-img'));
      allImgs.map(img => img.classList.add('hide'));
      TweenMax.from(this.img, 2, {opacity: 1});
      this.img.classList.remove('hide');
      TweenMax.from(this.img, 2, {opacity: 0});
      buttons.map((btn, i) => {
        btn.classList.remove('btn-color')
      });
      this.btn.classList.add('btn-color');
      title.innerText = titles[this.btnData - 1];
      TweenMax.from(title, 2, {opacity: 0});
      TweenMax.to(title, 2, {opacity: 1});
    })
  }
}

const buttons =  Array.from(document.querySelector('.serv-include-btns').children);
buttons.map(btn => new MenuButton(btn));

const titles = ['Pre-Construction', 'Construction', 'Design Build', 'Sustainability'];
const title = document.querySelector('.construction-dynamic h2');
title.innerText = "Pre-Construction";