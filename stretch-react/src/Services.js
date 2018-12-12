import React from "react";
import Footer from "./Footer";

import preConstruction from "./img/services/services-tab-pre-construction-img.png";
import preConstructionMobile from "./img/services/services-tab-mobile-pre-construction-img.png";
import construction from "./img/services/services-tab-construction-img.png";
import constructionMobile from "./img/services/services-tab-mobile-construction-img.png";
import design from "./img/services/services-tab-design-build-img.png";
import designMobile from "./img/services/services-tab-mobile-design-build-img.png";
import sustainability from "./img/services/services-tab-sustainability-img.png";
import sustainabilityMobile from "./img/services/services-tab-mobile-sustainability-img.png";

import jumboDesktop from "./img/services/services-jumbotron.png"
import jumboMobile from "./img/services/services-mobile-jumbotron.png"

class Services extends React.Component {
  render() {
    return (
      <div className="container services-page">
        <section className="header-section">
          <header>
            <img src={jumboDesktop} alt="" class="img--desktop" />
            <img src={jumboMobile} alt="" className="img--mobile" />
            <h1>Services</h1>
          </header>
        </section>
        );
        <section className="service-top">
          <p>
            Services include: completely synergize resource taxing relationships
            via premier niche markets. Professionally cultivate one-to-one
            customer service with robust ideas. Dynamically innovate
            resource-leveling customer service for state of the art customer
            service.
          </p>
        </section>
        <section className="service-bottom">
          <div className="tabs">
            <div className="tabs-links">
              <div className="tabs-link tabs-link-selected" data-tab="1">
                Pre-Construction
              </div>
              <div className="tabs-link" data-tab="2">
                Construction
              </div>
              <div className="tabs-link" data-tab="3">
                Design Build
              </div>
              <div className="tabs-link" data-tab="4">
                Sustainability
              </div>
            </div>
            <div className="tabs-items">
              <div className="tabs-item tabs-item-selected" data-tab="1">
                <div className="tabs-item-title">Pre-Construction</div>
                <div className="tabs-item-description-container">
                  <div className="tabs-item-description">
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. Dynamically innovate
                      resource-leveling customer service for state of the art
                      customer service.
                    </p>
                    <p>
                      Phosfluorescently engage worldwide methodologies with
                      web-enabled technology. Interactively coordinate proactive
                      e-commerce via process-centric "outside the box" thinking.
                      Completely pursue scalable customer service through
                      sustainable potentialities.
                    </p>
                  </div>
                  <img src={preConstruction} alt="" className="img--desktop" />
                  <img
                    src={preConstructionMobile}
                    alt=""
                    className="img--mobile"
                  />
                </div>
              </div>
              <div className="tabs-item" data-tab="2">
                <div className="tabs-item-title">Construction</div>
                <div className="tabs-item-description-container">
                  <div className="tabs-item-description">
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. Dynamically innovate
                      resource-leveling customer service for state of the art
                      customer service.
                    </p>
                    <p>
                      Phosfluorescently engage worldwide methodologies with
                      web-enabled technology. Interactively coordinate proactive
                      e-commerce via process-centric "outside the box" thinking.
                      Completely pursue scalable customer service through
                      sustainable potentialities.
                    </p>
                  </div>
                  <img src={construction} alt="" className="img--desktop" />
                  <img
                    src={constructionMobile}
                    alt=""
                    className="img--mobile"
                  />
                </div>
              </div>
              <div className="tabs-item" data-tab="3">
                <div className="tabs-item-title">Design Build</div>
                <div className="tabs-item-description-container">
                  <div className="tabs-item-description">
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. Dynamically innovate
                      resource-leveling customer service for state of the art
                      customer service.
                    </p>
                    <p>
                      Phosfluorescently engage worldwide methodologies with
                      web-enabled technology. Interactively coordinate proactive
                      e-commerce via process-centric "outside the box" thinking.
                      Completely pursue scalable customer service through
                      sustainable potentialities.
                    </p>
                  </div>
                  <img src={design} alt="" className="img--desktop" />
                  <img src={designMobile} alt="" className="img--mobile" />
                </div>
              </div>
              <div className="tabs-item" data-tab="4">
                <div className="tabs-item-title">Sustainability</div>
                <div className="tabs-item-description-container">
                  <div className="tabs-item-description">
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. Dynamically innovate
                      resource-leveling customer service for state of the art
                      customer service.
                    </p>
                    <p>
                      Phosfluorescently engage worldwide methodologies with
                      web-enabled technology. Interactively coordinate proactive
                      e-commerce via process-centric "outside the box" thinking.
                      Completely pursue scalable customer service through
                      sustainable potentialities.
                    </p>
                  </div>
                  <img src={sustainability} alt="" className="img--desktop" />
                  <img
                    src={sustainabilityMobile}
                    alt=""
                    className="img--mobile"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Services;
