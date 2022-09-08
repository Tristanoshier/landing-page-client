import React from "react";

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
                  <a href="#blog">Blog</a>
                </li>
                <li onClick={() => toggleCheckbox()}>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
