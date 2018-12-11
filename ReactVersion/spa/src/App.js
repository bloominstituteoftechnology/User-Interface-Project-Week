import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Home = () => (
        <body>
    <div class="header">
      <h1>S&J</h1>
      <img class="menu-button" src={require("./img/nav-hamburger.png")} />
    </div>
    <div class="menu">
      <div class="menutop">
          <h1>S&J</h1>
          <img class="close-button" src={require("./img/nav-hamburger-close.png")} />
      </div>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div class="jumbotron">
      <img src={require("./img/home/home-jumbotron.png")} />
      <h1>Integrity, Excellence, Progress.</h1>
    </div>
    <div class="row flip">
      <div class="text">
        <h2>Smith & Jones Architects</h2>
        <p>
          Et sed autem causae appareat, tempor abhorreant te mei, facer
          facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam
          laboramus dissentiet in, nec no errem
        </p>
        <div class="morebtn">Learn More</div>
      </div>
	  <div class="image desktop_img"><img src={require("./img/home/home-img-1.png")} /></div>
	  <div class="image mobile_img"><img src={require("./img/home/home-mobile-img-1.png")} /></div>
    </div>
    <div class="row unflip">
	  <div class="image desktop_img"><img src={require("./img/home/home-img-2.png")} /></div>
	  <div class="image mobile_img"><img src={require("./img/home/home-mobile-img-2.png")} /></div>
      <div class="text">
        <h2>Futuristic Designs</h2>
        <p>
          Et sed autem causae appareat, tempor abhorreant te mei, facer
          facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam
          laboramus dissentiet in, nec no errem
        </p>
        <div class="morebtn">View Designs</div>
      </div>
    </div>

   
    <div class="chunk">
		<h2>Recent Projects</h2>
      <div class="image">
		<img class="desktop_img" src={require("./img/home/home-villas-img.png")} />
		<img class="mobile_img" src={require("./img/home/home-mobile-villas-img.png")}/>
        <div class="title"><h2>THE VILLAS</h2></div>
      </div>
      <div class="blurb">
        <p>
          The Villas bring to the table win-win survival strategies to ensure
          proactive domination. At the end of the day, going forward, a new
          normal that has evolved from generation X is on the runway heading
          towards a streamlined cloud solution.
        </p>

        <p>
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.
        </p>
      </div>
    </div>
    <div class="chunk">
      <div class="image">
		<img class="desktop_img" src={require("./img/home/home-outskirts-img.png")}/>
		<img class="mobile_img" src={require("./img/home/home-mobile-outskirts-img.png")}/>
        <div class="titleleft"><h2>OUTSKIRTS</h2></div>
      </div>
      <div class="blurb">
        <p>
          The Outskirts are amazing to the table win-win survival strategies to
          ensure proactive domination. At the end of the day, going forward, a
          new normal that has evolved from generation X is on the runway heading
          towards a streamlined cloud solution.
        </p>
        <p>
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.
        </p>
      </div>
    </div>

    <div class="chunk">
      <div class="image">
		<img class="desktop_img" src={require("./img/home/home-the-blocks-img.png")} />
		<img class="mobile_img" src={require("./img/home/home-mobile-the-blocks-img.png")}/>
        <div class="title"><h2>THE BLOCKS</h2></div>
      </div>
      <div class="blurb">
        <p>
          The Blocks are amazing to the table win-win survival strategies to
          ensure proactive domination. At the end of the day, going forward, a
          new normal that has evolved from generation X is on the runway heading
          towards a streamlined cloud solution.
        </p>
        <p>
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.
        </p>
      </div>
    </div>

<footer>
	<div class="footercontent">
		<div class="interested">
				<h2>Interested in starting a project?</h2>
				<h2>Let’s talk:</h2>
		  
				<form>
					<input placeholder="Enter email"></input>
				</form>
		  
				<p>We'll never share your email with anyone else.</p>
		  
		</div>
<address>
		<h2>New York</h2>
		<p>123 Lane</p>
		<p>Suite 100</p>
		<p>Albany, NY 12345</p>
		<p>202 555 0144</p>
</address>

<address>
		<h2>Florida</h2>
		<p>Ocean Drive</p>
		<p>Suite 201</p>
		<p>Orlando, FL 22345</p>
		<p>502 555 0144</p>
</address>
<address>
		<h2>California</h2>
		<p>Mountain Street</p>
		<p>Suite 105</p>
		<p>San Diego, CA 22345</p>
		<p>702 555 0144</p>
</address>
	</div>
	<div class="copyright">
			<p>Copyright © 2018 Smith and Jones</p>
	</div>
      
	</footer>

    <script src="js/index.js"></script>
    <script src="js/menu.js"></script>
  </body>
)

const Services = () => (
  <body>
    <div class="header">
      <h1>S&J</h1>
      <img class="menu-button" src={require("./img/nav-hamburger.png")} />
    </div>
    <div class="menu">
      <div class="menutop">
        <h1>S&J</h1>
        <img class="close-button" src={require("./img/nav-hamburger-close.png")} />
      </div>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="jumbotron_services">
			<img class="desktop_img" src={require("./img/services/services-jumbotron.png")} />
			<img class="mobile_img" src={require("./img/services/services-mobile-jumbotron.png")}/>
      <h1>Services</h1>
    </div>
    <div class="desc">
      <p>
        Services include: completely synergize resource taxing relationships via
        premier niche markets. Professionally cultivate one-to-one customer
        service with robust ideas. Dynamically innovate resource-leveling
        customer service for state of the art customer service.
      </p>
    </div>
    <div class="tabs">
      <div class="tabs-links">
        <div class="tabs-link tabs-link-selected" data-tab="1">
          Pre-Construction
        </div>
        <div class="tabs-link" data-tab="2">Construction</div>
        <div class="tabs-link" data-tab="3">Design Build</div>
        <div class="tabs-link" data-tab="4">Sustainability</div>
      </div>
      <div class="tabs-items">
        <div class="tabs-item tabs-item-selected" data-tab="1">
          <div class="tabs-item-title">Pre-Construction</div>
          <div class="tabs-item-description">
							<div class="tabs-text">
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate resource-leveling
              customer service for state of the art customer service.
              Phosfluorescently engage worldwide methodologies with web-enabled
              technology. </p><p>Interactively coordinate proactive e-commerce via
              process-centric "outside the box" thinking. Completely pursue
              scalable customer service through sustainable potentialities.
						</p>
						</div>
						<div class="tabs-pic">
								<img src={require("./img/services/services-tab-pre-construction-img.png")}/>
							</div>
          </div>
        </div>
        <div class="tabs-item" data-tab="2">
          <div class="tabs-item-title">Construction</div>
          <div class="tabs-item-description">
							<div class="tabs-text">
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets.
              Phosfluorescently engage worldwide methodologies with web-enabled
              technology. Interactively coordinate proactive e-commerce via
              process-centric "outside the box" thinking. </p><p>Completely pursue
							scalable customer service through sustainable potentialities.
							Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate resource-leveling
              customer service for state of the art customer service.
						</p>
					</div>
					<div class="tabs-pic">
							<img src={require("./img/services/services-tab-construction-img.png")}/>
						</div>
          </div>
        </div>
        <div class="tabs-item" data-tab="3">
          <div class="tabs-item-title">Design Build</div>
          <div class="tabs-item-description">
							<div class="tabs-text">
            <p>
								Interactively coordinate proactive e-commerce via
								process-centric "outside the box" thinking. Completely pursue
								scalable customer service through sustainable potentialities.Completely synergize resource taxing relationships via premier
              niche markets. </p><p>Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate resource-leveling
              customer service for state of the art customer service.
              Phosfluorescently engage worldwide methodologies with web-enabled
              technology. 
						</p>
					</div>
					<div class="tabs-pic">
							<img src={require("./img/services/services-tab-design-build-img.png")}/>
						</div>
          </div>
        </div>
        <div class="tabs-item" data-tab="4">
          <div class="tabs-item-title">Sustainability</div>
          <div class="tabs-item-description">
						<div class="tabs-text">
								<p>
										Completely synergize resource taxing relationships via premier
										niche markets. Phosfluorescently engage worldwide methodologies with web-enabled
										technology. Interactively coordinate proactive e-commerce via
										process-centric "outside the box" thinking. </p><p>Professionally cultivate one-to-one customer
										service with robust ideas. Dynamically innovate resource-leveling
										customer service for state of the art customer service.
										Completely pursue
										scalable customer service through sustainable potentialities.
									</p>
						</div>
						<div class="tabs-pic">
							<img src={require("./img/services/services-tab-sustainability-img.png")}/>
						</div>
          </div>
        </div>
      </div>
    </div>
		<footer>
				<div class="footercontent">
					<div class="interested">
							<h2>Interested in starting a project?</h2>
							<h2>Let’s talk:</h2>
						
							<form>
								<input placeholder="Enter email"/>
							</form>
						
							<p>We'll never share your email with anyone else.</p>
						
					</div>
			<address>
					<h2>New York</h2>
					<p>123 Lane</p>
					<p>Suite 100</p>
					<p>Albany, NY 12345</p>
					<p>202 555 0144</p>
			</address>
			
			<address>
					<h2>Florida</h2>
					<p>Ocean Drive</p>
					<p>Suite 201</p>
					<p>Orlando, FL 22345</p>
					<p>502 555 0144</p>
			</address>
			<address>
					<h2>California</h2>
					<p>Mountain Street</p>
					<p>Suite 105</p>
					<p>San Diego, CA 22345</p>
					<p>702 555 0144</p>
			</address>
				</div>
				<div class="copyright">
						<p>Copyright © 2018 Smith and Jones</p>
				</div>
						
				</footer>
    <script src="js/index.js"></script>
    <script src="js/menu.js"></script>
  </body>
)

const Code = () => (
  <div>
    Code
  </div>
)

const Contact = () => (
  <div>
    Contact
  </div>
)

const info = () => (
  <div>
    Info
  </div>
)

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/services">
        <button>About</button>
      </Link>
      <Link to="/code">
        <button>code</button>
      </Link>
      <Link to="/contact">
        <button>contact</button>
      </Link>
      <Link to="/info">
        <button>info</button>
      </Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">


          <MainMenu/>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/info" component={info} />
          </div>
      </div>
      </Router>
    );
  }
}

export default App;
