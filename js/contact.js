// change background image url if below 500px
let ctaContact = document.querySelector('.cta-contact');

if (screen.width < 501) {
ctaContact.style.backgroundImage = 'url(./img/contact/contact-mobile-jumbotron.png)';
}

// check the contents of the form
const submitForm = (form) => {
  this.form = Object.values(form);
  let formContent = [];

  this.form.map((item) => {
    if(item.id) {
      if (item.id === 'email') {
        let email = item.value;
        formContent.push(email);
      }
      if (item.id === 'buildings') {
        let numBuildings = item.value;
        formContent.push(numBuildings);
      }
      if (item.id === 'comments') {
        let comments = item.value;
        formContent.push(comments);
      }
      if (item.type === 'radio' && item.checked === true) {
        let businessType = item.value;
        formContent.push(businessType);
      }
    }
  });
console.log(formContent);
}
