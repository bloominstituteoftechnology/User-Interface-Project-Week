const submit = document.querySelector('.button');
const emails = document.querySelectorAll('.email-input');
const dropdownOptions = document.querySelectorAll('option');
const radios = document.querySelectorAll(".radio-input");
const commentBox = document.querySelector('textarea');
const dropdownMenu = document.querySelector('select');

submit.addEventListener('click', () => {
    emails.forEach((email) => {
        email.value = 'Enter email';
    });
    dropdownMenu.value = 'select';
    radios.forEach((radio) => {
        radio.checked = false;
    });
    commentBox.value = "";

})