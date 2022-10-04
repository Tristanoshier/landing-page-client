import React from "react";
import { Link } from 'react-router-dom';

export const PortfolioService = () => {
  return (
    <div className="service-page">
      <div className="title">Personal Portfolio</div>
      <div className="service-page-container">
        <div className="description">
          This page was written in HTML and CSS. The CSS was compiled from SASS.
          I used Normalize as my CSS reset and -prefix-free to save myself some
          headaches. I haven't quite gotten the hang of Slim for compiling into
          HTML, but someday I'll use it since its syntax compliments that of
          SASS. Regardless, this could all be done in plain HTML and CSS.
        </div>
        <br />
        <div className="service-option">
          <div className="service-option-title">Template</div>
          <div className="includes-header">Includes:</div>
          <ul className="includes">
            <li>Landing page</li>
            <li>About page</li>
            <li>Examples of work page</li>
            <li>Services page</li>
            <li>Contact page</li>
            <li>Theme layout</li>
            <li>Custom colors, fonts, and pictures</li>
          </ul>
          <div className="price">Price: $250</div>
          <div className="completion-time">Completion Time: 3 days</div>
        </div>
        <br />
        <div className="service-option">
          <div className="service-option-title">Custom</div>
          <div className="includes-header">Includes:</div>
          <ul className="includes">
            <li>5 - 8 custom pages</li>
            <li>Custom layout & theme</li>
          </ul>
          <div className="price">Price: $500 - $800 depending on requests</div>
          <div className="completion-time">
            Completion Time: 1 - 2 weeks depending on requests
          </div>
        </div>
        <br />
        <div className="note">
          Not sure what option is best for you? Contact me via the link below to
          book a FREE 30-minute call to get more details on which option is
          right for you.
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
