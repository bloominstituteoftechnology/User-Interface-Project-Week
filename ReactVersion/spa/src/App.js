import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/menu/Header.js';
import Tab from './components/tabs/Tab.js';
import { HashRouter } from 'react-router-dom'

const Home = () => (
        <body>
    <div className="jumbotron">
      <img src={require("./img/home/home-jumbotron.png")} />
      <h1>Integrity, Excellence, Progress.</h1>
    </div>
    <div className="row flip">
      <div className="text">
        <h2>Smith & Jones Architects</h2>
        <p>
          Et sed autem causae appareat, tempor abhorreant te mei, facer
          facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam
          laboramus dissentiet in, nec no errem
        </p>
        <div className="morebtn">Learn More</div>
      </div>
	  <div className="image desktop_img"><img src={require("./img/home/home-img-1.png")} /></div>
	  <div className="image mobile_img"><img src={require("./img/home/home-mobile-img-1.png")} /></div>
    </div>
    <div className="row unflip">
	  <div className="image desktop_img"><img src={require("./img/home/home-img-2.png")} /></div>
	  <div className="image mobile_img"><img src={require("./img/home/home-mobile-img-2.png")} /></div>
      <div className="text">
        <h2>Futuristic Designs</h2>
        <p>
          Et sed autem causae appareat, tempor abhorreant te mei, facer
          facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam
          laboramus dissentiet in, nec no errem
        </p>
        <div className="morebtn">View Designs</div>
      </div>
    </div>

   
    <div className="chunk">
		<h2>Recent Projects</h2>
      <div className="image">
		<img className="desktop_img" src={require("./img/home/home-villas-img.png")} />
		<img className="mobile_img" src={require("./img/home/home-mobile-villas-img.png")}/>
        <div className="title"><h2>THE VILLAS</h2></div>
      </div>
      <div className="blurb">
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
    <div className="chunk">
      <div className="image">
		<img className="desktop_img" src={require("./img/home/home-outskirts-img.png")}/>
		<img className="mobile_img" src={require("./img/home/home-mobile-outskirts-img.png")}/>
        <div className="titleleft"><h2>OUTSKIRTS</h2></div>
      </div>
      <div className="blurb">
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

    <div className="chunk">
      <div className="image">
		<img className="desktop_img" src={require("./img/home/home-the-blocks-img.png")} />
		<img className="mobile_img" src={require("./img/home/home-mobile-the-blocks-img.png")}/>
        <div className="title"><h2>THE BLOCKS</h2></div>
      </div>
      <div className="blurb">
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
	<div className="footercontent">
		<div className="interested">
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
	<div className="copyright">
			<p>Copyright © 2018 Smith and Jones</p>
	</div>
      
	</footer>
  </body>
)

const Services = () => (
  <body>
    <div className="jumbotron_services">
			<img className="desktop_img" src={require("./img/services/services-jumbotron.png")} />
			<img className="mobile_img" src={require("./img/services/services-mobile-jumbotron.png")}/>
      <h1>Services</h1>
    </div>
    <div className="desc">
      <p>
        Services include: completely synergize resource taxing relationships via
        premier niche markets. Professionally cultivate one-to-one customer
        service with robust ideas. Dynamically innovate resource-leveling
        customer service for state of the art customer service.
      </p>
    </div>
    <Tab></Tab>
		<footer>
				<div className="footercontent">
					<div className="interested">
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
				<div className="copyright">
						<p>Copyright © 2018 Smith and Jones</p>
				</div>
						
				</footer>
    <script src="js/index.js"></script>
    <script src="js/menu.js"></script>
  </body>
)

const Contact = () => (
  <div>
    Contact
  </div>
)

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Header></Header>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
          </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
