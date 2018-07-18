//got tired of having to copy paste and then edit multiple pages for any changes

//innerhtml for the header box.
let headerInner =
  `<div class="container">
    <a href="index.html" class="brand">S&J</a>
    <div class="myToggler"><img src="img/nav-hamburger.png" alt="nav toggle icon"></div>
  </div>`;

//the toggle box which overlays the screen when hamburger is clicked
  let toggleInner =
    `<a href="index.html" class="nav-link">Home</a>
    <a href="services.html" class="nav-link">Services</a>
    <a href="#" class="nav-link">Contact</a>`;

    let header = document.querySelector('header');
    header.classList.add('myHeader', 'myModal');//add classes here
    header.dataset.target = "nav";//dataset to connect modal parts
    header.innerHTML = headerInner;

    //create the div that holds
    let toggle = document.createElement('div');
    toggle.classList.add('toggle-content', 'nav-modal', 'hide-modal');//classes for containing el
    toggle.dataset.target = "nav";//dataset to connect modal parts
    toggle.innerHTML = toggleInner;

    document.querySelector('body').appendChild(toggle);
