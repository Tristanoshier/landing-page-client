import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="page-header">Services I Offer</div>
      <div className="services-container">
        <ul>
          <li>
            <input type="checkbox" defaultChecked />
            <i></i>
            <h2><strong>01</strong> Personal Portfolio</h2>
            <p>
              This page was written in HTML and CSS. The CSS was compiled from
              SASS. I used Normalize as my CSS reset and -prefix-free to save
              myself some headaches. I haven't quite gotten the hang of Slim for
              compiling into HTML, but someday I'll use it since its syntax
              compliments that of SASS. Regardless, this could all be done in
              plain HTML and CSS.
              <br />
              <div className="btn-container">
                <Link className="btn-link" to="/portfolio-service">
                  <button className="landing-btn browse-all">See Details</button>
                </Link>
              </div>
            </p>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <i></i>
            <h2><strong>02</strong> Online Store</h2>
            <p>
              Using the sibling and checked selectors, we can determine the
              styling of sibling elements based on the checked state of the
              checkbox input element. One use, as demonstrated here, is an
              entirely CSS and HTML accordion element. Media queries are used to
              make the element responsive to different screen sizes.
              <br />
              <div className="btn-container">
                <Link className="btn-link" to="/store-service">
                  <button className="landing-btn browse-all">See Details</button>
                </Link>
              </div>
            </p>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <i></i>
            <h2><strong>03</strong> Consultation</h2>
            <p>
              By making the open state default for when :checked isn't detected,
              we can make this system accessable for browsers that don't
              recognize :checked. The fallback is simply an open accordion. The
              accordion can be manipulated with Javascript (if needed) by
              changing the "checked" property of the input element.
              <br />
              <div className="btn-container">
                <Link className="btn-link" to="/consultation-service">
                  <button className="landing-btn browse-all">See Details</button>
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
