const emailInput = document.querySelectorAll('.email-input');
const footerOnly = document.querySelector('.footer-email');
emailInput.forEach((input) => {
    input.addEventListener('focus', () => {
        input.value = "";
    })
})
window.addEventListener('keypress', (event) => {
    if (event.which === 13 || event.which === 27) {
        event.preventDefault()
        emailInput.forEach((input) => {
            input.value = "Enter email";
        })
    }
})

footerOnly.addEventListener('blur', () => {
    footerOnly.value = "Enter email";
})