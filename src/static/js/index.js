import '../less/index.less';
import Jumbotron from '../../components/jumbotron/js/jumbotron.js';
import Navbar from '../../components/navbar/js/navbar.js';
import Footer from '../../components/footer/js/footer.js';


// Get body.
const body = document.querySelector('body');

// Navbar.
const navbar = new Navbar(body);

// Jumbotron.
const header = document.createElement('header');
body.appendChild(header);
const homeJumbotron = new Jumbotron(header);

// footer
const footer = new Footer(body);
