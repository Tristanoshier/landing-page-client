import React from "react";
import { Link } from 'react-router-dom';

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
        <div className="service-option">
          <div className="includes-header">What I can help with:</div>
          <ul className="includes">
            <li>Career Advice</li>
            <li>Software Engineering Advice</li>
            <li>Software Engineering Projects</li>
            <li>Building a career roadmap</li>
            <li>Weekly Advice/Accountability</li>
            <li>Job searching</li>
            <li>Resume building</li>
            <li>LinkedIn profile building</li>
            <li>Interview prep</li>
          </ul>
          <div className="price">
            Price: $50/hr or $30/hr for weekly meetings(three week minimum)
          </div>
        </div>
        <div className="note">
          Have something in mind that is not listed above and want to see if I
          can help? Feel free to fill out the form below and I will get back to
          you with an answer!
        </div>
        <div className="btn-container">
          <Link className="btn-link" to="/contact-form">
            <button className="landing-btn browse-all">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
