import React from "react";
import { Link } from "react-router-dom";

export const PortfolioService = () => {
  return (
    <div className="service-page">
      <div className="title">Personal Website</div>
      <div className="service-page-container">
        <div className="description">
          This page was written in HTML and CSS. The CSS was compiled from SASS.
          I used Normalize as my CSS reset and -prefix-free to save myself some
          headaches. I haven't quite gotten the hang of Slim for compiling into
          HTML, but someday I'll use it since its syntax compliments that of
          SASS. Regardless, this could all be done in plain HTML and CSS.
        </div>
        <br />
        <div className="service-options">
          <div className="service-card-container">
            <div className="information-section">
              <div className="images">
                <img src="/images/alicemontana1.png" />
              </div>
              <div className="information">
                <div className="service-option-title">Template Portfolio</div>
                <div className="price">$350 - $500</div>
                <div className="delivery-time">1 - 3 day completion time</div>
                <div className="information-description">All template portfolios come with a landing page, about page, examples of work page, services page, and contact page. All templates are custom made by me with the option to change colors & fonts. Pictures and information must be provided in order to create your site.</div>
                <div className="btn-container">
                  <Link className="btn-link" to="/contact-form">
                    <button className="landing-btn browse-all">Contact</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="choose-template-section">
              <div className="pick">choose template</div>
              <div className="template-options">
                <button className="template-option">Student</button>
                <button className="template-option">Professional</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
