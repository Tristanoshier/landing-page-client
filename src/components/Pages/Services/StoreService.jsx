import React from "react";
import { Link } from "react-router-dom";

export const StoreService = () => {
  return (
    <div className="service-page">
      <div className="title">Online Store</div>
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
          <div className="service-option-title">Level 1</div>
          <div className="shop-description">
            This page was written in HTML and CSS. The CSS was compiled from
            SASS. I used Normalize as my CSS reset and -prefix-free to save
            myself some headaches.
          </div>
          <div className="includes-header">Includes:</div>
          <ul className="includes">
            <li>Landing page</li>
            <li>About page</li>
            <li>Contact page</li>
            <li>Shopping cart</li>
            <li>5 products</li>
            <li>One image per product</li>
            <li>Template theme</li>
          </ul>
          <div className="price">Price: $150</div>
          <div className="completion-time">Completion Time: 2 days</div>
        </div>
        <br />
        <div className="service-option">
          <div className="service-option-title">Level 2</div>
          <div className="shop-description">
            This page was written in HTML and CSS. The CSS was compiled from
            SASS. I used Normalize as my CSS reset and -prefix-free to save
            myself some headaches.
          </div>
          <div className="includes-header">Includes:</div>
          <ul className="includes">
            <li>Landing page</li>
            <li>About page</li>
            <li>Contact page</li>
            <li>Shopping cart</li>
            <li>50 products</li>
            <li>Five images per product</li>
            <li>Custom theme</li>
            <li>Google Analytics</li>
          </ul>
          <div className="price">Price: $300 + $9.99/month</div>
          <div className="completion-time">Completion Time: 5 days</div>
        </div>
        <br />
        <div className="service-option">
          <div className="service-option-title">Level 3</div>
          <div className="shop-description">
            This page was written in HTML and CSS. The CSS was compiled from
            SASS. I used Normalize as my CSS reset and -prefix-free to save
            myself some headaches.
          </div>
          <div className="includes-header">Includes:</div>
          <ul className="includes">
            <li>Landing page</li>
            <li>About page</li>
            <li>Contact page</li>
            <li>Shopping cart</li>
            <li>500 products</li>
            <li>Five images per product</li>
            <li>Custom theme</li>
            <li>Google Analytics</li>
          </ul>
          <div className="price">Price: $500 + $19.99/month</div>
          <div className="completion-time">Completion Time: 1 week</div>
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
