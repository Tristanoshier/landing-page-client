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
        <div className="service-options">
          <div className="service-card-container">
            <div className="information-section">
              <div className="images">
                <img src="/images/business.jpg" />
              </div>
              <div className="information">
                <div className="service-option-title">Just Getting Started</div>
                <div className="price">$200</div>
                <div className="delivery-time">1 - 2 day completion time</div>
                <div className="information-description">
                  This shop option includes a landing page, about page, contact
                  page, product page, and shopping cart. Display up to 5
                  products including a picture, description, and price for each
                  product. The best part about this option is there is no monthly fee! Just pay the up front cost and I will have your site ready for selling products in 1 - 2 days.
                  <br />
                  <br />
                  Your online store will be hosted on{" "}
                  <a href="https://www.bigcartel.com/" target="_blank">
                    bigcartel
                  </a>{" "}
                  which will allow you to offer discounts, run promos, offer
                  shipment tracking, set your shipping fees, and manage the
                  products visible on your page.
                </div>
                <div className="btn-container">
                  <Link className="btn-link" to="/contact-form">
                    <button className="landing-btn browse-all">Contact</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="service-card-container">
            <div className="information-section">
              <div className="images">
                <img src="/images/business.jpg" />
              </div>
              <div className="information">
                <div className="service-option-title">Level 2</div>
                <div className="price">$350 + $9.99/month</div>
                <div className="delivery-time">3 - 5 day completion time</div>
                <div className="information-description">
                  This shop option includes a landing page, about page, contact
                  page, product page, and shopping cart. Display up to
                  <strong>50 products</strong> including 5 pictures, a
                  description, and price for each product. This option also
                  includes Google Analytics and customization beyond fonts &
                  colors.
                  <br />
                  <br />
                  Your online store will be hosted and managed on
                  <a href="https://www.bigcartel.com/">bigcartel</a> which will
                  allow you to offer discounts, run promos, offer shipment
                  tracking, set your shipping fees, set up inventory tracking,
                  and manage the products visible on your page. The $9.99
                  monthly fee will be paid directly through bigcartel.
                </div>
                <div className="btn-container">
                  <Link className="btn-link" to="/contact-form">
                    <button className="landing-btn browse-all">Contact</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="service-card-container">
            <div className="information-section">
              <div className="images">
                <img src="/images/business.jpg" />
              </div>
              <div className="information">
                <div className="service-option-title">Level 3</div>
                <div className="price">$500 + $19.99/month</div>
                <div className="delivery-time">1 week completion time</div>
                <div className="information-description">
                  This shop option includes a landing page, about page, contact
                  page, product page, and shopping cart. Display up to{" "}
                  <strong>500 products</strong> including 5 pictures, a
                  description, and price for each product. This option also
                  includes Google Analytics and customization beyond fonts &
                  colors.
                  <br />
                  <br />
                  Your online store will be hosted and managed on{" "}
                  <a href="https://www.bigcartel.com/" target="_blank">
                    bigcartel
                  </a>{" "}
                  which will allow you to offer discounts, run promos, offer
                  shipment tracking, set your shipping fees, set up inventory
                  tracking, and manage the products visible on your page. The
                  $19.99 monthly fee will be paid directly through bigcartel.
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
      {/*
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
      </div> */}
    </div>
  );
};