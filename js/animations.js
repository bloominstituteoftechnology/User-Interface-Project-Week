
let newYork = document.querySelector(".locations .new-york");
let florida = document.querySelector(".locations .florida");
let california = document.querySelector(".locations .california");


console.log(newYork);
console.log(florida);
console.log(california);

newYork.addEventListener("mouseover", (event) => {
    TweenMax.to(newYork, .25, {scale:1.03, boxShadow:"3px 3px 4px #D8D8D8"});
    event.stopPropagation();
})

newYork.addEventListener("mouseleave", (event) => {
    TweenMax.to(newYork, .25, {scale:1, boxShadow:"0px 0px 0px"});
    event.stopPropagation();
})

florida.addEventListener("mouseover", (event) => {
    TweenMax.to(florida, .25, {scale:1.03, boxShadow:"3px 3px 4px #D8D8D8"});
    event.stopPropagation();
})

florida.addEventListener("mouseleave", (event) => {
    TweenMax.to(florida, .25, {scale:1, boxShadow:"0px 0px 0px"});
    event.stopPropagation();
})

california.addEventListener("mouseover", (event) => {
    TweenMax.to(california, .25, {scale:1.03, boxShadow:"3px 3px 4px #D8D8D8"});
    event.stopPropagation();
})

california.addEventListener("mouseleave", (event) => {
    TweenMax.to(california, .25, {scale:1, boxShadow:"0px 0px 0px"});
    event.stopPropagation();
})

// Can't get this to work with a forEach for whatever reason

// let locations = document.querySelector(".locations");
// console.log(locations);

// locations.forEach((item, index) => {
//     item.addEventListener('mouseenter', function(event) {
//         TweenMax.to(newYork, .25, {scale:1, boxShadow:"0px 0px 0px"});
//     })
// });

