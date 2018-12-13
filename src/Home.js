import React from "react";

import jumboDesktop from "./img/home/home-jumbotron.png";
import jumboMobile from "./img/home/home-mobile-jumbotron.png";

import homeDesktop from "./img/home/home-img-1.png";
import homeMobile from "./img/home/home-mobile-img-1.png";
import homeTwoDesktop from "./img/home/home-img-2.png";
import homeTwoMobile from "./img/home/home-mobile-img-2.png";
import villaDesktop from "./img/home/home-villas-img.png";
import villaMobile from "./img/home/home-mobile-villas-img.png"
import outskirtsDesktop from "./img/home/home-outskirts-img.png"
import outskirtsMobile from "./img/home/home-mobile-outskirts-img.png"
import blockDesktop from "./img/home/home-the-blocks-img.png"
import blockMobile from "./img/home/home-mobile-the-blocks-img.png"







const Home = ()=> {

    return (
      <div className="container home-page">
        <section className="header-section">
        <header>
          <img src={jumboDesktop} alt="" className="img--desktop" />
          <img src={jumboMobile} alt="" className="img--mobile" />
          <h1>
            Integrity,
            <br />
            Excellence,
            <br />
            Progress.
          </h1>
        </header>
      </section>
        {/* top content */}
        <section className="top-content">
          <div className="tp-item">
            <div className="tp-text">
              <h2>Smith & Jones Architects</h2>
              <p>
                Et sed autem causae appareat, tempor abhorreant te mei, facer
                facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam
                laboramus dissentiet in, nec no errem{" "}
              </p>
              <div>Learn More</div>
            </div>
            <img
              src={homeDesktop}
              alt="architect art with pen"
              className="imgright img--desktop"
            />
            <img src={homeMobile} alt="" className="img--mobile" />
          </div>

          <div className="tp-item">
            <img
              src={homeTwoDesktop}
              alt=""
              className="img--desktop"
            />
            <img
              src={homeTwoMobile}
              alt=""
              className="img--mobile"
            />
            <div className="tp-text" id="txtright">
              <h2>Futuristic Designs</h2>
              <p>
                Et sed autem causae appareat, tempor abhorreant te mei, facer
                facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam
                laboramus dissentiet in, nec no errem{" "}
              </p>

              <div>View Designs</div>
            </div>
          </div>
        </section>

        {/* bottom content */}
        <section className="bottom-content">
          <h2>Recent Projects</h2>
          <div className="bottom-items">
            <img src={villaDesktop} alt="" className="img--desktop" />
            <img
              src={villaMobile}
              alt=""
              className="img--mobile"
            />
            <div className="titlebox title-right">THE VILLAS</div>
            <div className="bottom-text">
              <p>
                The Villas bring to the table win-win survival strategies to
                ensure proactive domination. At the end of the day, going
                forward, a new normal that has evolved from generation X is on
                the runway heading towards a streamlined cloud solution.
              </p>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
          </div>
          <div className="bottom-items">
            <img
              src={outskirtsDesktop}
              alt=""
              className="img--desktop"
            />
            <img
              src={outskirtsMobile}
              alt=""
              className="img--mobile"
            />
            <div className="titlebox">OUTSKIRTS</div>
            <div className="bottom-text">
              <p>
                The Outskirts are amazing to the table win-win survival
                strategies to ensure proactive domination. At the end of the
                day, going forward, a new normal that has evolved from
                generation X is on the runway heading towards a streamlined
                cloud solution.
              </p>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
          </div>
          <div className="bottom-items">
            <img
              src={blockDesktop}
              alt=""
              className="img--desktop"
            />
            <img
              src={blockMobile}
              alt=""
              className="img--mobile"
            />
            <div className="titlebox title-right">THE BLOCKS</div>
            <div className="bottom-text">
              <p>
                The Blocks are amazing to the table win-win survival strategies
                to ensure proactive domination. At the end of the day, going
                forward, a new normal that has evolved from generation X is on
                the runway heading towards a streamlined cloud solution.
              </p>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Home;
