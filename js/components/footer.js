//got tired of copying/pasting and then having to edit each page for any changes.
//if ide colors are needed, just remove and then replace ``;
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
  <div class="ftr-copyright w-100">Copyright © 2018 Smith and Jones</div>`;

  let footer = document.querySelector('footer');//grab footer tag
  footer.classList.add('ftr-cont');//add class list
  footer.innerHTML = footerInner;//add in the inner tags
