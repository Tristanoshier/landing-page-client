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
       <h3 id="mobile-logo">
          <a className="nav-link" href="/#">
            Tristan Oshier
          </a>
        </h3>
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
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li onClick={() => toggleCheckbox()}>
                  <Link className="nav-link" to="/photography">
                    Projects
                  </Link>
                </li>
                <li onClick={() => toggleCheckbox()}>
                  <Link className="nav-link" to="/info">
                    Info
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
