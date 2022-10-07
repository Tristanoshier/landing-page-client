import React from "react";
import { Link } from "react-router-dom";

export const MobileNavbar = () => {
  const toggleCheckbox = () => {
    let toggleButton = document.getElementById("toggler");
    if (toggleButton.checked) {
      toggleButton.checked = false;
    } else {
      toggleButton.checked = true;
    }
  };

  return (
    <div className="mobile-navbar">
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" id="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li onClick={() => toggleCheckbox()}>
                  <a href="/#">Home</a>
                </li>
                <li onClick={() => toggleCheckbox()}>
                  <a href="#projects">Portfolio</a>
                </li>
                <li onClick={() => toggleCheckbox()}>
                  <a href="#services">Services</a>
                </li>
                <li onClick={() => toggleCheckbox()}>
                  <Link className="nav-link" to="/Blog">
                    Blog
                  </Link>
                </li>
                <li onClick={() => toggleCheckbox()}>
                  <Link className="nav-link" to="/contact-form">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
