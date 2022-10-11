import React from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";

export const ConsultationService = () => {
  return (
    <div className="service-page">
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div className="title">Consultation</div>
          </div>
        )}
      </Spring>
      <br />
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div className="service-page-container">
              <div className="service-options">
                <div className="service-card-container">
                  <div className="information-section">
                    <div className="images"></div>
                    <div className="information">
                      <div className="service-option-title">
                        1 on 1 Consultation
                      </div>
                      <div className="price">$45/hr</div>
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
                        Have something in mind that is not listed above and want
                        to see if I can help? Feel free to contact me below and
                        I will get back to you with an answer!
                      </div>
                      <div className="btn-container">
                        <Link className="btn-link" to="/contact-form">
                          <button className="landing-btn browse-all">
                            Contact
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
};
