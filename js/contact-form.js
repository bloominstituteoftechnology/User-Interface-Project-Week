const contactFormSubmitButton = document.querySelector(".contact__form__details__submit-button");
contactFormSubmitButton.addEventListener("click", e => {
    const contactFormEmailInput = document.querySelector(".contact__form__details__field__email");
    const contactFormBuildingCountInput = document.querySelector(".contact__form__details__field__building-count");
    const contactFormJobOverview = document.querySelector(".contact__form__details__field__overview");
    const contactFormSelectedRadioButton = document.querySelectorAll(".contact__form__details__field__client-type > input:checked");
    
    // let selectedClientTypeRadioButton = null;
    // for (let i = 0; i < contactFormRadioButtons.length; i++) {
    //     if (contactFormRadioButtons[i].selected) {
    //         selectedClientTypeRadioButton = contactFormRadioButtons[i];
    //         break;
    //     }
    // }

    const email = contactFormEmailInput.value;
    const buildingCount = contactFormBuildingCountInput.value;
    const jobOverview = contactFormJobOverview.value;
    

    if (!email.match(/[_a-zA-Z0-9!@#$%^&():;]+(.[a-zA-Z0-9!@#$%^&():;]+)@[a-zA-Z0-9!@#$%^&():;]+((.[a-zA-Z0-9!@#$%^&():;]+)){3,10}/)) {
        alert("Please enter a valid email address first.");
    } else if (buildingCount < 1) {
        alert("Please enter a valid number for buildings to plan.");
    } else if (!jobOverview) {
        alert("Please enter an overview of the job first.");
    } else if (!contactFormSelectedRadioButton) {
            alert("Please select an option first (type of client).");
    } else {
        const clientType = contactFormSelectedRadioButton[0].value;
        
        alert(`Email from ${clientType} using the address "${email}" for ${buildingCount} building(s) will be sent very soon!`);
    }
});

