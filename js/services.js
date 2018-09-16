class TabLink{
  constructor(element){
    this.element = element;

    this.tabData = this.element.dataset.tab;

    this.services = document.querySelectorAll(`.service[data-tab = "${this.tabData}"]`);

/*
    if(this.tabData === 'pre-construction'){
      this.services = document.querySelectorAll('.service');
    } else {
      this.services = document.querySelectorAll(`.service[data-tab = "${this.tabData}"]`);
    }
*/

    this.services = Array.from(this.services).map(item => new TabService(item));

    this.element.addEventListener('click', () => this.selectTab());

  }

  selectTab(){
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(item => item.classList.remove('active-tab'));

    this.element.classList.add('active-tab');

    const services = document.querySelectorAll('.service');

    services.forEach(item => item.style = 'display: none');

    this.services.forEach(service => service.selectService());

  }
}

class TabService{
  constructor(element){
    this.element = element;
  }

  selectService(){
    this.element.style = 'display: null';
  }
}

let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map(item => new TabLink(item));

tabs[0].selectTab();