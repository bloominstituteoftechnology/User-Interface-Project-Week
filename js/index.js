// JS goes here
const nav = document.querySelector('.header');
const hamburger = nav.querySelector('img');
const navMenu = document.querySelector('.menu');

flexFont = () => {
  let headers = document.getElementsByClassName('box');
  let links = document.getElementsByClassName('tabs-link');

  for (let i = 0; i < headers.length; i++) {
    let relFontsize = headers[i].offsetWidth * 0.07;
    headers[i].style.fontSize = relFontsize + 'px';
  }

  for (let i = 0; i < links.length; i++) {
    if (window.innerWidth > 480) {
      let relFontsize = links[i].offsetWidth * 0.09;
      links[i].style.fontSize = relFontsize + 'px';
    } else {
      links[i].style.fontSize = 2.1 + 'rem';
    }
  }
};

setNav = () => {
  const scrollTop =
    window.scrollY ||
    window.pageYOffset ||
    document.body.scrollTop +
      ((document.documentElement && document.documentElement.scrollTop) || 0);

  if (scrollTop > 20 && !navMenu.classList.contains('menu--open')) {
    nav.setAttribute(
      'style',
      'background: #9DA7B1; opacity: 0.95; margin-top: 0;'
    );
  } else if (!navMenu.classList.contains('menu--open')) {
    nav.removeAttribute('style', 'background');
  }
};

setJumbtronHeight = a => {
  // Sets a fixed height for the jumbotron on mobile
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      a
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      a.substr(0, 4)
    )
  ) {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
};

window.onload = () => {
  flexFont();
  setNav();
  setJumbtronHeight(navigator.userAgent || navigator.vendor || window.opera);
};

window.onresize = () => {
  flexFont();
};

document.addEventListener('scroll', () => setNav());

hamburger.addEventListener('click', () => {
  const scrollTop =
    window.scrollY ||
    window.pageYOffset ||
    document.body.scrollTop +
      ((document.documentElement && document.documentElement.scrollTop) || 0);

  if (scrollTop < 1 && navMenu.classList.contains('menu--open')) {
    navMenu.classList.toggle('menu--open');
  } else if (scrollTop > 1 && !navMenu.classList.contains('menu--open')) {
    nav.setAttribute(
      'style',
      'background: null; opacity: 0.95; margin-top: 0;'
    );
    navMenu.classList.toggle('menu--open');
  } else if (!scrollTop < 1) {
    nav.setAttribute(
      'style',
      'background: #9DA7B1; opacity: 0.95; margin-top: 0;'
    );
    navMenu.classList.toggle('menu--open');
  } else {
    navMenu.classList.toggle('menu--open');
  }
  if (navMenu.classList.contains('menu--open')) {
    hamburger.src = 'img/nav-hamburger-close.png';
  } else {
    hamburger.src = 'img/nav-hamburger.png';
  }
});

class Tabs {
  constructor(element) {
    this.element = element;
    // create a reference to the ".tabs-link" class nested in your tab object
    this.links = this.element.querySelectorAll('.tabs-link');
    // This step will map over the array creating new TabsLink class instances of each link.  No need to update anything here, just study what is going on.  Notice that we are creating another new object using the TabsLink class.
    this.links = Array.from(this.links).map(link => {
      return new TabsLink(link, this);
    });
    // Set the active link to the first item in the array
    this.activeLink = this.links[0];
    // Nothing to update here, just notice we are invoking the init() method
    this.init();
  }

  init() {
    // invoke the method select() on activeLink
    this.activeLink.select();
  }

  updateActive(newActive) {
    // invoke the method deselect() on activeLink
    this.activeLink.deselect();
    // assign this.activeLink to the new active link (newActive)
    this.activeLink = newActive;
  }

  getTab(data) {
    // return a reference to the element's data attribute
    return this.element.querySelector(`.tabs-item[data-tab='${data}']`);
  }
}

class TabsLink {
  // notice that we passesd in the element reference as well as a reference to the parent class.
  constructor(element, parent) {
    this.element = element;
    // assign this.tabs to parent
    this.tabs = parent;
    // Using the method from the parent class above, pass in a reference to the custom data attribute.
    this.tabsItem = parent.getTab(element.dataset.tab);
    // Create a new TabsItem object that passes in a tabsItem value that you just created above
    this.tabsItem = new TabsItem(this.tabsItem);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      // invoke the select() method on this
      this.select();
    });
  }

  select() {
    // Add a class named "tabs-link-selected" to the element
    this.element.classList.add('tabs-link-selected');
    // Notice that we are using the select method on tabsItem
    this.tabsItem.select();
  }

  deselect() {
    // Remove a class named "tabs-link-selected" from the element
    this.element.classList.remove('tabs-link-selected');
    // Notice that we are using the deselect method on tabsItem
    this.tabsItem.deselect();
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Add a class named "tabs-item-selected" to the element
    this.element.classList.add('tabs-item-selected');
  }

  deselect() {
    // Remove a class named "tabs-item-selected" from the element
    this.element.classList.remove('tabs-item-selected');
    // Congrats, you finished all the instruction, check out your tab navigator!
  }
}

// START HERE: create a reference to the ".tabs" classes
let tabs = document.querySelectorAll('.tabs');
// map through each tabs element and create a new Tabs object.  Be sure to pass in a reference to the tab when creating the Tabs object.
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
