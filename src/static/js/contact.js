import '../less/contact.less';
// import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
// import Materialize from '../../../node_modules/materialize-css/dist/js/materialize.min.js';
import bannerImg from '../../../Assets/img/contact/contact-jumbotron.png';
import Navbar from '../../components/navbar/js/navbar.js';
import Footer from '../../components/footer/js/footer.js';
import Banner from '../../components/banner/js/banner.js';



// Get body.
const body = document.querySelector('body');

// Navbar.
const navbar = new Navbar(body);

// Header
const header = document.createElement('header');
body.appendChild(header);

const bannerData = {
  imgSrc: bannerImg,
  text: ['Contact']
};

// banner
const banner = new Banner(header, bannerData);

// Footer
const footer = new Footer(body);
