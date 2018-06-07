//NAVIGATION BAR
// document.addEventListener('click', function clickFunc() {
//     // console.log('hey') ;
//     alert('DON\'T CLICK ME!!!!');
// });
// document.getElementById('my-body-id').onscroll = function() {
//     console.log('yo') ;
//     // alert('yo!') ;
// };

window.addEventListener('scroll', function () {
    console.log('scrolling!');
    // console.log('scrolling!' + ' ~ ' + window.scrollY);
    // console.log(document.title);

    if (this.document.title === "S&J Architects-Home") {

        if (window.scrollY > 550) {
            document.querySelector('.my-navbar').setAttribute("style", 'background: #D8D8D8;  opacity: 0.95; z-index: 1');

        } else if (window.scrollY === 0 || window.scrollY < 550) {
            document.querySelector('.my-navbar').setAttribute("style", 'opacity: 1; background: null;');
        }

    } else {
        if (window.scrollY > 200) {
            document.querySelector('.my-navbar').setAttribute("style", 'background: #D8D8D8;  opacity: 0.95; z-index: 1');

        } else if (window.scrollY === 0 || window.scrollY < 200) {
            document.querySelector('.my-navbar').setAttribute("style", 'opacity: 1; background: null;');
        }
    }
});