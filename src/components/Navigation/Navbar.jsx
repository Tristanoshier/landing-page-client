import React, { useState } from "react";
import { MobileNavbar } from "./MobileNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [topNav, setTopNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setTopNav(true);
    } else {
      setTopNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const navbar = () => {
    return (
      <nav className={topNav ? "navbar active" : "navbar"}>
        <h3 id="logo">
          <a className="nav-link" href="/#">
            TRISTAN OSHIER
          </a>
        </h3>
        <div className="nav-items">
        <li className="nav-item">
            <Link className="nav-link" to="/">
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/photography">
              photography
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/web-design">
              web design
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/info">
              info
            </Link>
          </li>
        </div>
      </nav>
    );
  };

  return (
    <>
      {navbar()}
      <MobileNavbar />
    </>
  );
};

export default React.memo(Navbar);
