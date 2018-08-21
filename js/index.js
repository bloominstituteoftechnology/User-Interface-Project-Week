// JS goes here

// Navigation expand/collapse

let navButton = document.querySelector('.nav-button');
let navigation = document.querySelector('#navigation');
let isOpen = false;

navButton.addEventListener('click', function(){
    if(isOpen == false){
        navigation.style.display = 'flex';
        navButton.innerHTML = `<img src = './img/nav-hamburger-close.png'></img>`;
        isOpen = true;
    } else {
        navigation.style.display = 'none';
        navButton.innerHTML = `<img src = './img/nav-hamburger.png'></img>`
        isOpen = false;
    }
});

var width = window.matchMedia('(min-width: 500px)');
alternate(width);
width.addListener(alternate);

function alternate(){

// Shifts every other project title to the left on desktop

    
let projects = document.querySelectorAll('.project');
let everyOther = [];

projects.forEach(function(each){
    if(each.dataset.tab % 2 === 0){
        everyOther.push(each);
    }
});

let eoTitle = [];

for(i = 0; i < everyOther.length; i++){
    eoTitle.push(everyOther[i].querySelector('.project-title'));
}
if(width.matches){
for(i = 0; i < eoTitle.length; i++){
    eoTitle[i].style.cssText = 'left: 0; right: initial;';
}

} else {
    for(i = 0; i < eoTitle.length; i++){
        eoTitle[i].style.cssText = 'left: initial; right: initial;';
}

}

}