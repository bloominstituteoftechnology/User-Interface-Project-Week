class Modal{
  constructor(element){
    this.element = element;
    this.target = this.element.dataset.target;
    console.log(this.target);
    this.toggler = element.querySelector('.myToggler');
    this.togglerIcon = this.toggler.querySelector('img');
    this.modalContent = document.querySelector(`.toggle-content[data-target="${this.target}"]`);
    console.log(this.modalContent);

    this.togglerIconSrc = "img/nav-hamburger.png";

    this.toggler.addEventListener('click', this.toggleModal.bind(this));
  }

  toggleModal(){
    this.modalContent.classList.toggle('hide-modal');
    this.togglerIconSrc = (this.togglerIconSrc === "img/nav-hamburger.png") ? "img/nav-hamburger-close.png" : "img/nav-hamburger.png";
    this.togglerIcon.src = this.togglerIconSrc;
  }
}


let modals = document.querySelectorAll('.myModal');
modals = Array.from(modals).map(modal => new Modal(modal));
