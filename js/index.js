// JS goes here

const formButton = document.querySelector(".contact-form__form--submit");
const formMain = document.querySelector(".contact-form__form");

formButton.addEventListener('click', function() {
    formMain.reset();
    window.alert("Thank you for your submition! We will be in contact within 24 hours");
    
});
