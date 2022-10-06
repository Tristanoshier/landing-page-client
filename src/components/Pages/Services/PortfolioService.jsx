import React from "react";
import { Link } from "react-router-dom";

export const PortfolioService = () => {
  return (
    <div className="service-page">
      <div className="title">Personal Website</div>
      <br />
      <div className="service-page-container">
        <div className="service-options">
          <div className="service-card-container">
            <div className="information-section">
              <div className="images">
                <img src="/images/alicemontana1.png" alt="portfolio example" />
              </div>
              <div className="information">
                <div className="service-option-title">Template Portfolio</div>
                <div className="price">$350 - $500</div>
                <div className="delivery-time">3 - 5 day completion time</div>
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
