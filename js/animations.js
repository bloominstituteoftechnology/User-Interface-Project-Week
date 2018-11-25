const imgPreviewDiv = document.querySelector('.image-preview-div');
const designButton = document.querySelector('.design-button');

designButton.addEventListener('click', openPhotos);

function openPhotos() {
    TweenMax.to(imgPreviewDiv, 2, {opacity: 1});
}

const nextButton = document.querySelector('.next-button');
const previousButton = document.querySelector('.previous-button');
previousButton.addEventListener('click', changeBackgroundColor);
const imgDivContainer = document.querySelector('.image-div-container');
nextButton.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const randomColorArray = ['#eccc68', '#ff6b81', '#57606f', '#ffffff', '#2ed573', '#3742fa'];
    TweenMax.to(imgDivContainer, 1, {backgroundColor: randomColorArray[Math.floor(Math.random() * randomColorArray.length)]})
}


designButton.addEventListener('mouseover', changeText);
designButton.addEventListener('mouseout', changeBackText);


function changeText() {
    designButton.textContent ='Click Me!';
    TweenMax.to(designButton, 4, {rotation:'360'})
}

function changeBackText() {
    designButton.textContent ='View Designs';
}