// JS goes here
const formButton = document.querySelector(".contact-form__form--submit");
const formMain = document.querySelector(".contact-form__form");
// const footerButton = document.querySelector(".contact__subscribe--form");
// const footerForm = document.querySelector("contact__subscribe--form-top");

formButton.addEventListener('click', function() {
    formMain.reset();
    window.alert("Thank you for your submition! We will be in contact within 24 hours");
    
})

// footerForm.addEventListener('submit', function(){
//     footerForm.reset();
//     window.alert("Thank you for your submition! We will be in contact within 24 hours");
// })
