// JS goes here

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

document.getElementById("yo1").style.color="white";
document.getElementById("yo1").style.backgroundColor="#5E9FB9"


function precon() {
    document.getElementById("precon").style.display = "flex";
    document.getElementById("cons").style.display ="none";
    document.getElementById("desi").style.display ="none";
    document.getElementById("sust").style.display ="none";

    document.getElementById("yo1").style.color="white";
    document.getElementById("yo1").style.backgroundColor="#5E9FB9"
    document.getElementById("yo2").style.color="black";
    document.getElementById("yo2").style.backgroundColor="white"
    document.getElementById("yo3").style.color="black";
    document.getElementById("yo3").style.backgroundColor="white"
    document.getElementById("yo4").style.color="black";
    document.getElementById("yo4").style.backgroundColor="white"
}

function cons() {
    document.getElementById("precon").style.display = "none";
    document.getElementById("cons").style.display ="flex";
    document.getElementById("desi").style.display ="none";
    document.getElementById("sust").style.display ="none";

    document.getElementById("yo2").style.color="white";
    document.getElementById("yo2").style.backgroundColor="#5E9FB9"
    document.getElementById("yo1").style.color="black";
    document.getElementById("yo1").style.backgroundColor="white"
    document.getElementById("yo3").style.color="black";
    document.getElementById("yo3").style.backgroundColor="white"
    document.getElementById("yo4").style.color="black";
    document.getElementById("yo4").style.backgroundColor="white"
}

function desi() {
    document.getElementById("precon").style.display = "none";
    document.getElementById("cons").style.display ="none";
    document.getElementById("desi").style.display ="flex";
    document.getElementById("sust").style.display ="none";

    document.getElementById("yo3").style.color="white";
    document.getElementById("yo3").style.backgroundColor="#5E9FB9"
    document.getElementById("yo1").style.color="black";
    document.getElementById("yo1").style.backgroundColor="white"
    document.getElementById("yo2").style.color="black";
    document.getElementById("yo2").style.backgroundColor="white"
    document.getElementById("yo4").style.color="black";
    document.getElementById("yo4").style.backgroundColor="white"
}

function sust() {
    document.getElementById("precon").style.display = "none";
    document.getElementById("cons").style.display ="none";
    document.getElementById("desi").style.display ="none";
    document.getElementById("sust").style.display ="flex";

    document.getElementById("yo4").style.color="white";
    document.getElementById("yo4").style.backgroundColor="#5E9FB9"
    document.getElementById("yo1").style.color="black";
    document.getElementById("yo1").style.backgroundColor="white"
    document.getElementById("yo2").style.color="black";
    document.getElementById("yo2").style.backgroundColor="white"
    document.getElementById("yo3").style.color="black";
    document.getElementById("yo3").style.backgroundColor="white"
}

class TabLink {
  constructor(tabElement){
    
    this.tabElement = tabElement;
      
    this.tabData = this.tabElement.dataset.tab;
  
    if(this.tabData == 'all'){
      
      this.cards = document.querySelectorAll('.card');
      //console.log(this.cards);

    } else {

      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
      //console.log(this.cards);
    }
            
    this.cards = Array.from(this.cards).map( function (card){
      return new TabCard(card);
    }); 
    
 console.log(this.cards);

 this.tabElement.addEventListener('click', this.selectTab.bind(this) );
}

selectTab(){
 const tabs = document.querySelectorAll('.tab');

 tabs.forEach(function(e){
   e.classList.remove("active-tab")
 });

 const cards = document.querySelectorAll('.card');

cards.forEach(function(e){
   //console.log(e);
   e.style.display = 'none';
 });
 
 this.tabElement.classList.add(".active-tab");

this.cards.forEach(card => card.selectCard());
    }
}

class TabCard {
constructor(cardElement){
 // Assign this.cardElement to the cardElement DOM reference
 this.cardElement = cardElement;

}
selectCard(){
 // Update the style of this.cardElement to display = "flex"
 this.cardElement.style.display ='flex';
}

}

let tabs = document.querySelectorAll('.tab');

tabs.forEach( function(e) {
return new TabLink(e);
});