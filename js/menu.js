const doc = document;
var tl = new TimelineMax();
const burgerList = doc.querySelectorAll('.menu-button .burger');
const burger = Array.from(burgerList);
const navWrapper= doc.querySelector('.nav-wrapper');
const menu = doc.querySelector('.menu');
const menuHeight = menu.offsetHeight;
const menuButton = doc.querySelector('.menu-button');


const urlLinks = doc.querySelectorAll('.menu ul li a');
const activeLinks = doc.querySelectorAll('.menu ul li a');
const urls = Array.from(urlLinks);


const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 

    if (menu.classList.value !== 'menu menu--open') {
        navWrapper.style.opacity = '0.97';
        menu.style.opacity = .98;

        TweenLite.from(menu, .333, {y: -1200, ease:Bounce});

        tl.staggerFrom('.menu li', 1, {opacity:0}, .1);
        TweenLite.from(burger[0], .333, {width:33});
        TweenLite.to(burger[0], .333, {width:44, rotation: 225, marginRight: -5, marginTop: 0});

        TweenLite.from(burger[1], .100, {display: 'block'});
        TweenLite.to(burger[1], .100, {display: 'none'});
        
        TweenLite.from(burger[2], .333, {width:33});
        TweenLite.to(burger[2], .333, {width:44, rotation: -225, marginTop: -21, marginRight: -5});
        

        const page = window.location.href;

        let pageString = page.toString();
        let pageArray = Array.from(pageString);
        console.log(pageArray);
        let newString = [];
        let reverseString = [];
        for (let i = pageArray.length-1; i >= 0; i--) {

            newString.push(pageArray[i]);
            reverseString = newString.toString();
            
        
            if (pageArray[i] === '/') {
                break;
            }
            
        }
        // console.log(reverseString);
        finalString = reverseString.toString().split(',').slice(5).reverse().slice(1).join('');
        // activeLinks.forEach(active => active.remove('nav-active'));
        urls.forEach(link => link.classList.remove('nav-active'));

        console.log(finalString);
        for (let j=0; j < urls.length; j++) {

            if (urls[j].innerText === 'Home') {
                activeLinks.forEach(active => active.classList.remove('nav-active'));
                urls[j].classList.toggle('nav-active');
            }
            else if (urls[j].innerText.toLowerCase() === finalString) {
                activeLinks.forEach(active => active.classList.remove('nav-active'));
                urls[j].classList.toggle('nav-active');
            }
            else {
                console.log(false);
            }
        }
        menu.classList.toggle('menu--open');

        
    }
    else if (menu.classList.value === 'menu menu--open') {
        navWrapper.style.opacity = '0.97';
        navWrapper.style.opacity = '1';
        
        TweenLite.to(menu, .340, {opacity: 0, ease:Bounce});

        TweenLite.from(burger[0], .333, {width:44, marginRight: -5, marginTop: 0});
        TweenLite.to(burger[0], .333, {width:33, rotation: -180, marginRight: 0, marginTop: 0});

        TweenLite.from(burger[1], .100, {display: 'none'});
        TweenLite.to(burger[1], .100, {display: 'block'});

        TweenLite.from(burger[2], .333, {width:44, rotation: -45, marginTop: -21, marginRight: -5});
        TweenLite.to(burger[2], .333, {width:33, rotation: 180, marginRight: 0, marginTop: 0});

        setTimeout(() =>  (menu.classList.toggle('menu--open')), 340);
        
        setTimeout(() => (menu.style.opacity = 1), 340);
        
    }
}


menuButton.addEventListener('click', toggleMenu);
  
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 60){
        navWrapper.style.opacity = '0.97';
    }
    else if (window.pageYOffset < 60) {
        navWrapper.style.opacity = '1';
    }

});
  
  