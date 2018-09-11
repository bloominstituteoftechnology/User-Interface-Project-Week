import '../less/index.less';
import '../../../node_modules/animate.css/animate.min.css';
import './../../components/jumbotron/less/jumbotron.less';
import Jumbotron from '../../components/jumbotron/js/jumbotron.js';

// (function(){

  const body = document.querySelector('body');
  const header = document.createElement('header');
  body.appendChild(header);

  const homeJumbotron = new Jumbotron(header);




// })();
