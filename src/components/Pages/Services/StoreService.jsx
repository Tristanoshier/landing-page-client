import React from "react";
import { Link } from "react-router-dom";

export const StoreService = () => {
  return (
    <div className="service-page">
      <div className="title">Online Store</div>
      <br />
      <div className="service-page-container">
        <div className="service-options">
          <div className="service-card-container">
            <div className="information-section">
              <div className="images">
                <div>01</div>
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
                  <a href="https://www.bigcartel.com/" target="_blank" rel="noreferrer">
                    Big Cartel
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
                <div>02</div>
              </div>
              <div className="information">
                <div className="service-option-title">Starting to Grow</div>
                <div className="price">$350 + $9.99/month</div>
                <div className="delivery-time">3 - 5 day completion time</div>
                <div className="information-description">
                  This shop option includes a landing page, about page, contact
                  page, product page, and shopping cart. Display up to{" "}
                  <strong>50 products</strong> including 5 pictures, a
                  description, and price for each product. This option also
                  includes Google Analytics and customization beyond fonts &
                  colors.
                  <br />
                  <br />
                  Your online store will be hosted and managed on
                  {" "}<a href="https://www.bigcartel.com/" target="_blank" rel="noreferrer">Big Cartel</a> which will
                  allow you to offer discounts, run promos, offer shipment
                  tracking, set your shipping fees, set up inventory tracking,
                  and manage the products visible on your page. The $9.99
                  monthly fee will be paid directly through Big Cartel.
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
                <div>03</div>
              </div>
              <div className="information">
                <div className="service-option-title">Business is Taking Off!</div>
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
                  <a href="https://www.bigcartel.com/" target="_blank" rel="noreferrer">
                    Big Cartel
                  </a>{" "}
                  which will allow you to offer discounts, run promos, offer
                  shipment tracking, set your shipping fees, set up inventory
                  tracking, and manage the products visible on your page. The
                  $19.99 monthly fee will be paid directly through Big Cartel.
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
