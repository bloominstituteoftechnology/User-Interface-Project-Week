const whoBtns = document.querySelectorAll('.who');
console.log(whoBtns);

const nameTag = document.querySelectorAll('.name-tag')

class Employee{
    constructor(attributes){
        this.name = attributes.name;
        this.role = attributes.role;
        this.years = attributes.years;
        this.holiday = attributes.holiday;
        this.img = attributes.img;
    }
} 

const gregg = new Employee({
    name: "Gregg Tinkerton",
    role: "Founder - CEO",
    years: 22,
    holiday: "Thanksgiving",
    img: 'img/about/founder.jpg',
})
const jasmine = new Employee({
    name: "Jasmine Hurtz",
    role: "Head of HR",
    years: 6,
    holiday: "Easter",
    img: 'img/about/hr-1.jpg',
})
const jillian = new Employee({
    name: "Jillian Gill",
    role: "CFO",
    years: 7,
    holiday: "Thanksgiving",
    img: 'img/about/hr-2.jpg',
})
const nelly = new Employee({
    name: "Nelly Jackson",
    role: "Business Development",
    years: 5,
    holiday: "Fourth of July",
    img: 'img/about/hr-3.jpg',
})
const william = new Employee({
    name: "William Harris",
    role: "Client Relations",
    years: 2,
    holiday: "Christmas",
    img: 'img/about/hr-4.jpg',
})
const tim = new Employee({
    name: "Tim Rollins",
    role: "Head of Construction",
    years: 18,
    holiday: "Thanksgiving",
    img: 'img/about/hr-5.jpg',
});
const team ={
    gregg,
    jasmine,
    jillian,
    nelly,
    william,
    tim
}
// Modal Elements
theModal = document.querySelector('.modal');
modalName = document.querySelector('.modal-name');
modalRole = document.querySelector('.modal-role');
modalYear = document.querySelector('.modal-year');
modalDay = document.querySelector('.modal-holiday');
modalPro = document.querySelector('.modal-pro');
modalExit = document.querySelector('.exit');

whoBtns.forEach((btn)=>{
    btn.addEventListener("click", ()=> {
    theModal.classList.toggle('show-modal');
    theModal.classList.toggle('hidden-modal');
    const key = btn.classList.item(1);
    const modalMem = team[key];
    console.log(modalMem);
    modalName.textContent = `Name: ${modalMem.name}`;
    modalRole.textContent = `Position: ${modalMem.role}`;
    modalYear.textContent = `Years at S&J: ${modalMem.years}`;
    modalDay.textContent = `Favorite Holiday: ${modalMem.holiday}`;
    modalPro.src=`${modalMem.img}`;
    
    window.onclick = function(event) {
        if (event.target == theModal) {
            theModal.classList.toggle('show-modal');
            theModal.classList.toggle('hidden-modal');
        }
    }
    });

});
modalExit.addEventListener("click", ()=> {
    theModal.classList.toggle('show-modal');
    theModal.classList.toggle('hidden-modal');
});


