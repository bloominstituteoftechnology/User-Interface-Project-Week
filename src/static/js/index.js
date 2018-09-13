import '../less/index.less';
import homeImageOne from '../../../Assets/img/home/home-img-1.png';
import homeImageTwo from '../../../Assets/img/home/home-img-2.png';
import homeVillasImg from '../../../Assets/img/home/home-villas-img.png';
import homeOutskirtsImg from '../../../Assets/img/home/home-outskirts-img.png';
import homeBlocksImg from '../../../Assets/img/home/home-the-blocks-img.png';
import Jumbotron from '../../components/jumbotron/js/jumbotron.js';
import Navbar from '../../components/navbar/js/navbar.js';
import Footer from '../../components/footer/js/footer.js';
import HorizontalCard from '../../components/horizontalCard/js/horizontalCard.js';
import ProjectCard from '../../components/projectCard/js/projectCard.js';


// Get body.
const body = document.querySelector('body');

// Navbar.
const navbar = new Navbar(body);

// Jumbotron.
const header = document.createElement('header');
body.appendChild(header);
const homeJumbotron = new Jumbotron(header);

// Section one
const sectionOne = document.createElement('section');
sectionOne.classList.add('section-one');
body.appendChild(sectionOne);

// Horizontal card.
const horizontalCardData = [{
  imgSide: 'right',
  imgSrc: homeImageOne,
  heading: 'Smith & Jones Architects',
  text: 'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
  buttonText: 'Learn More'
}, {
  imgSide: 'left',
  imgSrc: homeImageTwo,
  heading: 'Futuristic Designs',
  text: 'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
  buttonText: 'View Designs'
}];

horizontalCardData.forEach(function(obj) {
  const card = new HorizontalCard(sectionOne, obj);
});

// Section two
const sectionTwo = document.createElement('section');
sectionTwo.classList.add('section-two');
body.appendChild(sectionTwo);

const sectionTwoLabel = document.createElement('h2');
sectionTwoLabel.innerHTML = "Recent Projects";
sectionTwoLabel.classList.add('section-two-label');
sectionTwo.appendChild(sectionTwoLabel);

// Project card.
const cardData =[{
  imgSrc: homeVillasImg,
  labelText: "THE VILLAS",
  labelSide: 'right',
  text: [
    "The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
    "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
  ]
}, {
  imgSrc: homeOutskirtsImg,
  labelText: "OUTSKIRTS",
  labelSide: 'left',
  text: [
    "The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
    "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
  ]
}, {
  imgSrc: homeBlocksImg,
  labelText: "THE BLOCKS",
  labelSide: 'right',
  text: [
    "The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
    "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
  ]
}];

cardData.forEach(function(obj) {
  new ProjectCard(sectionTwo, obj);
});


// footer
const footer = new Footer(body);
