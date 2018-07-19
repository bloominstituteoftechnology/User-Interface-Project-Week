
class Nav {
  constructor(props) {
    this.props = props;
    this.burger = this.props.querySelector('.main-nav__burger');
    this.burger.addEventListener('click', () => {this.open()});
    this.navItems = document.querySelector('.main-nav__items--container');
    this.logo = this.props.querySelector('.main-logo');
    this.closeIcon = this.navItems.querySelector('.main-nav__close');
    this.closeIcon.addEventListener('click', () => {this.close()});
  }

  open (e) {
    TweenMax.from(this.navItems, .7, {x:200, y:-300, opacity:0, scale:0.7});
    this.burger.classList.toggle('display-none');
    this.navItems.classList.toggle('main-nav__items--active');
    this.logo.classList.toggle('display-none');
  }

  close(e) {
    this.burger.classList.toggle('display-none');
    this.navItems.classList.toggle('main-nav__items--active');
    this.logo.classList.toggle('display-none');
  }
}

/*
class NavItems {
  constructor(childProps, parent) {
    this.props = childProps;
    this.parent = parent;
    this.closeIcon = this.props.querySelector('.main-nav__close');
    this.closeIcon.addEventListener('click', () => {this.close()});
  }
  close() {
    this.props.remove('main-nav__items--active');
    console.log(this.parent.burger.classList)
    this.parent.burger.classList.remove('display-none');
    
  }
}
*/

let header = document.querySelectorAll('.main-header');
header = Array.from(header).map(header => new Nav(header));
