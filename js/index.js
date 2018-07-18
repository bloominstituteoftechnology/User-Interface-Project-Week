//got tired of having to edit on multiple pages
//if ide colors are wanted, just remove `` and replace when done

//!-------HEADER
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

//!-------FOOTER

let footerInner =
  `<div class="ftr-inner">
    <div class="ftr-contact">
      <h3>Interested in starting a project?<br>Let's talk:</h3>
      <input type="text" placeholder="Enter email">
      We'll never share your email with anyone else.
    </div>
    <div class="ftr-loc">
      <h3>New York</h3>
      <p>123 Lane<br>
      Suite 100<br>
      Albany, NY 12345<br>
      202 555 0144</p>
    </div>
    <div class="ftr-loc">
      <h3>Florida</h3>
      <p>Ocean Drive<br>
      Suite 201<br>
      Orlando, FL 22345<br>
      502 555 0144</p>
    </div>
    <div class="ftr-loc">
      <h3>California</h3>
      <p>Mountain Street<br>
      Suite 105<br>
      San Diego, CA 22345<br>
      702 555 0144</p>
    </div>
  </div>
  <div class="ftr-copyright">Copyright © 2018 Smith and Jones</div>`;

let footer = document.querySelector('footer');//grab footer tag
footer.classList.add('ftr-cont');//add class list
footer.innerHTML = footerInner;//add in the inner tags
