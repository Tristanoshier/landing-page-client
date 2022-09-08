import React from 'react';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <p className="contact-heading">Have any questions?</p>
      <div className="btn-container">
        <Link className="btn-link" to="/contact-form">
          <button className="landing-btn conversation">Start a conversation</button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Contact);
