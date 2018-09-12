import '../less/index.less';
import homeImageOne from '../../../Assets/img/home/home-img-1.png';
import Jumbotron from '../../components/jumbotron/js/jumbotron.js';
import Navbar from '../../components/navbar/js/navbar.js';
import Footer from '../../components/footer/js/footer.js';
import HorizontalCard from '../../components/horizontalCard/js/horizontalCard.js';


// Get body.
const body = document.querySelector('body');

// Navbar.
const navbar = new Navbar(body);

// Jumbotron.
const header = document.createElement('header');
body.appendChild(header);
const homeJumbotron = new Jumbotron(header);

// Horizontal card.
const horizontalCardData = [{
  imgSide: 'right',
  imgSrc: homeImageOne,
  heading: 'Smith & Jones Architects',
  text: 'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
  buttonText: 'Learn More'
}, {
  imgSide: 'left',
  imgSrc: homeImageOne,
  heading: 'Smith & Jones Architects',
  text: 'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
  buttonText: 'Learn More'
}];

horizontalCardData.forEach(function(obj) {
  const card = new HorizontalCard(body, obj);
});



// footer
const footer = new Footer(body);
