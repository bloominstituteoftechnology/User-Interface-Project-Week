const learnMoreButton = document.querySelector('.learn-more');
const learnMoreContent = document.querySelector('.learn-more-p');

learnMoreButton.addEventListener('click', () => {
    if(learnMoreButton.innerHTML === 'Learn More'){
        learnMoreButton.innerHTML = "Back";
        learnMoreContent.innerHTML = 'Please contact one of our artichects today. We can come up with a comprehensive plan to meet your desires, time frame and wallet.'

    } else {
        learnMoreButton.innerHTML = 'Learn More';
        learnMoreContent.innerHTML = 'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem';
    }
    
});

const viewDesignsButton = document.querySelector('.view-designs');
const viewDesignsContent = document.querySelector('.view-designs-p');
const viewDesignsImage = document.querySelector('.view-designs-img');
viewDesignsButton.addEventListener('click', () => {
    if(viewDesignsButton.innerHTML === 'View Designs'){
        viewDesignsButton.innerHTML = 'Back';
        viewDesignsContent.style.display = 'none';
        viewDesignsImage.style.display = 'inline-block';

    } else {
        viewDesignsButton.innerHTML = 'View Designs';
        viewDesignsContent.innerHTML = 'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem';
        viewDesignsContent.style.display = 'block';
        viewDesignsImage.style.display = 'none';
    }
});