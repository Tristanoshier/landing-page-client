import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="page-header dark">Services I Offer</div>
      <div className="services-container">
        <ul>
          <li>
            <input type="checkbox" defaultChecked />
            <i></i>
            <h2>
              <strong>01</strong> Personal Website
            </h2>
            <p>
              Need a website to showcase your work and the services that you
              provide along with an easy way to contact you? This is the right
              option for you! I can build you a high-performing, beautiful
              website that will bring your personal brand to the next level in
              as little as three days. Learn more about this option below.
              <br />
              <div className="btn-container">
                <Link className="btn-link" to="/portfolio-service">
                  <button className="landing-btn light browse-all">Learn More</button>
                </Link>
              </div>
            </p>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <i></i>
            <h2>
              <strong>02</strong> Online Store
            </h2>
            <p>
              Need an online store to take your sales to the next level? This is
              the right option for you! I have multiple different store and
              pricing packages available depending on the size of your business
              and number of products that you are wanting to sell. I will get
              your business online and ready for customers in as little as two
              days! Learn more about the different online store packages that I
              have available below.
              <br />
              <div className="btn-container">
                <Link className="btn-link" to="/store-service">
                  <button className="landing-btn light browse-all">Learn More</button>
                </Link>
              </div>
            </p>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <i></i>
            <h2>
              <strong>03</strong> Consultation
            </h2>
            <p>
              Stuck in your career? Need help with interview prep? Just want
              someone to keep you accountable while working on a project? These
              are just a few of the different things I can help you out with
              through my one on one consultation service. Having a mentor was
              one of the most impactful things on my career and it ended up
              saving me a ton of time. Learn more about this service below to
              get started.
              <br />
              <div className="btn-container">
                <Link className="btn-link" to="/consultation-service">
                  <button className="landing-btn light browse-all">Learn More</button>
                </Link>
              </div>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Services);
