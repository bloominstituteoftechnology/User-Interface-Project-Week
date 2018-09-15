import '../less/services.less';
import preConstructionImg from '../../../Assets/img/services/services-tab-pre-construction-img.png'
import constructionImg from '../../../Assets/img/services/services-tab-construction-img.png';
import designBuildImg from '../../../Assets/img/services/services-tab-design-build-img.png';
import sustainableImg from '../../../Assets/img/services/services-tab-sustainability-img.png';
import bannerImg from '../../../Assets/img/services/services-jumbotron.png';
import Navbar from '../../components/navbar/js/navbar.js';
import Footer from '../../components/footer/js/footer.js';
import Banner from '../../components/banner/js/banner.js';
import TabPages from '../../components/tabPages/js/tabPages.js';


// Get body.
const body = document.querySelector('body');

// Navbar.
const navbar = new Navbar(body);

// Header
const header = document.createElement('header');
body.appendChild(header);

const bannerData = {
  imgSrc: bannerImg,
  text: ['Services']
};

// banner
const banner = new Banner(header, bannerData);


const main = document.createElement('main');
body.appendChild(main);

const sectionOne = document.createElement('section');
sectionOne.classList.add('section-one');
main.appendChild(sectionOne);

const label = document.createElement('p');
label.classList.add('main-label');
label.innerHTML = "Services include: completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.";
sectionOne.appendChild(label);



// Tab pages data.
const tabPageData = [{
  label: "Pre-Construction",
  text: [
    "completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.",
    "Phosfluorescently engage worldwid methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric \"outside the box\" thinking. Completely pursue scalable customer service through sustainable potentialities."
  ],
  imgSrc: preConstructionImg
}, {
  label: "Construction",
  text: [
    "completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.",
    "Phosfluorescently engage worldwid methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric \"outside the box\" thinking. Completely pursue scalable customer service through sustainable potentialities."
  ],
  imgSrc: constructionImg
}, {
  label: "Design Build",
  text: [
    "completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.",
    "Phosfluorescently engage worldwid methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric \"outside the box\" thinking. Completely pursue scalable customer service through sustainable potentialities."
  ],
  imgSrc: designBuildImg
}, {
  label: "Sustainability",
  text: [
    "completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.",
    "Phosfluorescently engage worldwid methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric \"outside the box\" thinking. Completely pursue scalable customer service through sustainable potentialities."
  ],
  imgSrc: sustainableImg
}];

// Tab pages.
const tabPages = new TabPages(sectionOne, tabPageData);

// Footer
const footer = new Footer(body);
