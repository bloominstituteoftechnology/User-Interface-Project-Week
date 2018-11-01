let images = document.querySelectorAll('.figure-img');
images = Array.from(images);

function imageGrow(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("click", event => {
            TweenMax.to(arr[i], 2, {
                scale: 1.05,
            });
        });    
    }
}

function imageShrink(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("dblclick", event => {
            TweenMax.to(arr[i], 1, {
                scale: 1.0,
            });
        });    
    }
}

imageGrow(images);
imageShrink(images);

