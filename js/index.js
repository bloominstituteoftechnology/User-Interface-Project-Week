// JS goes here

let recentPhotoEffect = document.querySelectorAll('.recent-photo');
console.log(recentPhotoEffect);

Array.from(recentPhotoEffect).map((event) => {
    event.addEventListener('mouseover', function(event){
        event.currentTarget.style.filter = "sepia(100%)";
    });
});

Array.from(recentPhotoEffect).map((event) => {
    event.addEventListener('mouseleave', function(event){
        event.currentTarget.style.filter = "sepia(0%)";
    });
});

// recentPhotoEffect.addEventListener('mouseover', function(event){
//     event.currentTarget.style.filter = "sepia(100%)";
// });

// recentPhotoEffect.addEventListener('mouseleave', function(event){
//     event.currentTarget.style.filter = "sepia(0%)";
// });

