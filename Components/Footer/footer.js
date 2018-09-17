const emailInput = document.querySelectorAll('.email-input');
const footerOnly = document.querySelector('.footer-email');

//clear placeholder in email input
emailInput.forEach((input) => {
    input.addEventListener('focus', () => {
        input.value = "";
    })
})

//put placeholder back in input when enter is pressed
window.addEventListener('keypress', (event) => {
    if (event.which === 13 || event.which === 27) {
        event.preventDefault()
            //check validity of email entered
        let isValid = footerOnly.checkValidity();
        if (isValid === true)
            footerOnly.value = "Thank you!";
        else if (isValid === false) {
            footerOnly.value = "";
            window.alert('Please enter a valid email');
        }
    }
})

//put placeholder back in if focus goes away from email input
footerOnly.addEventListener('blur', () => {
    footerOnly.value = "Enter email";
})