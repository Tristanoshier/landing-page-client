import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="page-header">Services I Offer</div>
      <div className="services-container">
        <div className="service-option">
          <div className="service-title">01 Personal Portfolio</div>
          <div className="service-description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </div>
          <Link to="/portfolio-service">
            <button>See Details</button>
          </Link>
        </div>
        <div className="service-option">
          <div className="service-title">02 Online Store</div>
          <div className="service-description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </div>
          <Link to="/store-service">
            <button>See Details</button>
          </Link>
        </div>
        <div className="service-option">
          <div className="service-title">03 Consultation</div>
          <div className="service-description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </div>
          <Link to="/consultation-service">
            <button>See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Services);
