import React from "react";
import { Link } from "react-router-dom";

export const ConsultationService = () => {
  return (
    <div className="service-page">
      <div className="title">Consultation</div>
      <div className="service-page-container">
        <div className="description">
          This page was written in HTML and CSS. The CSS was compiled from SASS.
          I used Normalize as my CSS reset and -prefix-free to save myself some
          headaches. I haven't quite gotten the hang of Slim for compiling into
          HTML, but someday I'll use it since its syntax compliments that of
          SASS. Regardless, this could all be done in plain HTML and CSS.
        </div>
        <div className="service-options">
          <div className="service-card-container">
            <div className="information-section">
              <div className="images">
                <img src="/images/business.jpg" />
              </div>
              <div className="information">
                <div className="service-option-title">1 on 1 consultation</div>
                <div className="price">$50/hr</div>
                <br />
                <div className="help">What I can help with:</div>
                <div className="consultation-topics">
                  <ul>
                    <li>Career advice</li>
                    <li>Software Engineering advice</li>
                    <li>Software Engineering projects</li>
                    <li>Building a career roadmap</li>
                    <li>Weekly advice/accountability</li>
                  </ul>
                  <ul id="right-options">
                    <li>Job searching</li>
                    <li>Resume building</li>
                    <li>LinkedIn profile building</li>
                    <li>Interview prep</li>
                  </ul>
                </div>
                <br />
                <div className="information-description">
                  Have something in mind that is not listed above and want to
                  see if I can help? Feel free to contact me below and I
                  will get back to you with an answer!
                </div>
                <div className="btn-container">
                  <Link className="btn-link" to="/contact-form">
                    <button className="landing-btn browse-all">Contact</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
