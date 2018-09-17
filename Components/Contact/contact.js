const submit = document.querySelector('.button');
const emails = document.querySelectorAll('.email-input');
const dropdownOptions = document.querySelectorAll('option');
const radios = document.querySelectorAll(".radio-input");
const commentBox = document.querySelector('textarea');
const dropdownMenu = document.querySelector('select');

//clear text on email input when field is clicked.
emails[0].addEventListener('focus', () => {
        emails[0].value = "";
    })
    //reset forms
submit.addEventListener('click', () => {
    //check validity of email entered
    let isValid = emails[0].checkValidity();
    if (isValid === true) {
        window.alert('Thank you for contacting us! We will get back to you within 2 business days.')
        emails.forEach((email) => {
            email.value = 'Enter email';
        });
        dropdownMenu.value = 'select';
        radios.forEach((radio) => {
            radio.checked = false;
        });
        commentBox.value = "";
    } else if (isValid === false) {
        window.alert('Please provide a valid email address');
    }
})