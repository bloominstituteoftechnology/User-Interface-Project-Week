



openButton = document.querySelector('#toOpen');
closeButton = document.querySelector('#toClose')
dropdownPage = document.querySelector('.dropdown');

openButton.addEventListener('click', function(){
openButton.style.display = 'none'
closeButton.style.display = 'flex'
dropdownPage.style.display = 'flex'
});

closeButton.addEventListener('click', function(){
    closeButton.style.display = 'none'
    openButton.style.display = 'flex'
    dropdownPage.style.display = 'none'
}); 



class ButtonSelector{
    constructor(element){
        this.element = element;
        this.data = this.element.innerHTML;
        this.card = document.querySelector(`#${this.data}-tab`);
        this.element.addEventListener('click', this.Clicks.bind(this));
    }
    Clicks(){
        const allButtonSelector = document.querySelectorAll('.button');
        allButtonSelector.forEach(function(element){
            element.classList.remove('activeButton')
        });
        this.element.classList.add('activeButton');
         const allInfoBox = document.querySelectorAll('.infoBox');
        allInfoBox.forEach(function(element){
            element.style.display = 'none'
        });
        this.card.style.display = 'flex';
    }
};
 let tabList = document.querySelectorAll('.button');
 tabList = Array.from(tabList).map(function(element){
    return new ButtonSelector(element)
});
