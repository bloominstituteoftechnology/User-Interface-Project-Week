const emailInput = document.querySelector('input');
emailInput.addEventListener('focus', () => {
    emailInput.value = "";
})
window.addEventListener('keypress', (event) => {
    if (event.which === 13 || event.which === 27) {
        event.preventDefault()
        emailInput.value = "Thanks!";
    }
})

emailInput.addEventListener('blur', () => {
    emailInput.value = "Enter email";
})