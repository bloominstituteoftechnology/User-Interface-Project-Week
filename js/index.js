class TabLink {
    constructor(e) {
      this.e = e;
      // Get the custom data attribute on teh Link
      this.navData = this.e.dataset.tab;
      // Using the custom data attribute ge tthe associated Item element
      this.item = document.querySelector(`.nav-tab[data-tab="${this.navData}"]`);

      // Using the Item element, create a new instance of the TabItem class
      //this.tabItem = new TabItem(this.item);

      this.e.addEventListener('click', () => {
        // Call the select method you define below
        this.select();
      });
    };

    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.nav-tab');

      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      links.forEach( link => {
        link.classList.remove('active-tab');
      });
      // Add a class named "tabs-link-selected" to this link
      this.e.classList.add('active-tab');
      let box = document.querySelectorAll('.Blank');
      let content = document.querySelectorAll('.content');

      if(this.navData === 'Pre-Construction') {
        box[0].innerHTML = '<img src="./img/services/services-tab-pre-construction-img.png" id="content-img">';

      }

      if(this.navData === 'Construction') {
        box[0].innerHTML = '<img src="./img/services/services-tab-construction-img.png" id="content-img">';

      }

      if(this.navData === 'Design Build') {
        box[0].innerHTML = '<img src="./img/services/services-tab-design-build-img.png" id="content-img">';

      }

      if(this.navData === 'Sustainability') {
        box[0].innerHTML = '<img src="./img/services/services-tab-sustainability-img.png" id="content-img">';

      }


    }
  }

  // START HERE: create a reference to the ".tabs-link" class
  let links = document.querySelectorAll('.nav-tab');
  // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item.
  links = Array.from(links).map( link => new TabLink(link));

  // Do this last!!!
  links[0].select();
