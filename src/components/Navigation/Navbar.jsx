import React, { useState } from 'react';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Routes } from './Routes';

const Navbar = (props) => {
    const [sidebar, setSidebar] = useState(false);

    const openSidebar = () => setSidebar(!sidebar);

    return (
        <div className="main-nav">
            <button className={sidebar && props.darkMode ? "hamburger-dark active" : sidebar && !props.darkMode ? " hamburger-light active" : !sidebar && props.darkMode ? "hamburger-dark" : "hamburger-light"} onClick={openSidebar}><FontAwesomeIcon icon={faBars} size="2x"></FontAwesomeIcon></button>
            <Nav className={sidebar && props.darkMode ? "nav-dark active" : sidebar && !props.darkMode ? "nav-light active" : !sidebar && props.darkMode ? "nav-dark" : "nav-light"}>
                <span className="mobile-main-nav-section">
                    <NavItem className="nav-item">
                        <NavLink
                            activeClassName={props.darkMode ? "active-dark" : "active-light"}
                            tag={RRNavLink}
                            onClick={openSidebar}
                            className={props.darkMode ? "mobile-home-link-darkmode" : "mobile-home-link-lightmode"}
                            to="/">Tristan Oshier
                        </NavLink>
                    </NavItem>
                    <NavItem className="main-nav-item">
                        <Link className={props.darkMode ? "main-nav-link-darkmode" : "main-nav-link-lightmode"} to="/">Tristan Oshier</Link>
                        <button className={props.darkMode ? "mobile-exit-button-dark" : "mobile-exit-button-light"} onClick={openSidebar}><FontAwesomeIcon icon={faTimes} size="2x"></FontAwesomeIcon></button>
                    </NavItem>
                </span>
                <div className="nav-items-section">
                    <NavItem className="nav-item">
                        <NavLink
                            activeClassName={props.darkMode ? "active-dark" : "active-light"}
                            onClick={openSidebar}
                            tag={RRNavLink}
                            className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"}
                            to="/About">About
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink
                            activeClassName={props.darkMode ? "active-dark" : "active-light"}
                            onClick={openSidebar}
                            tag={RRNavLink}
                            className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"}
                            to="/Coding">Coding
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink
                            activeClassName={props.darkMode ? "active-dark" : "active-light"}
                            onClick={openSidebar}
                            tag={RRNavLink}
                            className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"}
                            to="/Music">Music
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink
                            activeClassName={props.darkMode ? "active-dark" : "active-light"}
                            onClick={openSidebar}
                            tag={RRNavLink}
                            className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"}
                            to="/Blog">Blog
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink
                            activeClassName={props.darkMode ? "active-dark" : "active-light"}
                            onClick={openSidebar}
                            tag={RRNavLink}
                            className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"}
                            to="/Contact">Contact
                        </NavLink>
                    </NavItem>
                    {/* social media links */}
                    <div className="social-media">
                        <li><a className={props.darkMode ? "social-link-dark" : "social-link-light"} href="https://www.linkedin.com/in/tristan-oshier-678420196/" target="_linkedin" ><FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon></a></li>
                        <li><a className={props.darkMode ? "social-link-dark" : "social-link-light"} href="https://github.com/Tristanoshier" target="_github" ><FontAwesomeIcon icon={faGithubSquare} size="2x"></FontAwesomeIcon></a></li>
                    </div>

                    {/* light mode / dark mode toggle */}
                    <div className="toggle-container">
                        <span className="sun" style={{ color: props.darkMode ? "var(--gray)" : "var(--orange)" }}>☀︎</span>
                        <span className="toggle">
                            <input
                                checked={props.darkMode}
                                onChange={() => props.setDarkMode(prevMode => !prevMode)}
                                type="checkbox"
                                className="checkbox"
                                id="checkbox" />
                            <label htmlFor="checkbox" />
                        </span>
                        <span className="moon" style={{ color: props.darkMode ? "var(--white)" : "var(--gray)" }}>☾</span>
                    </div>
                    <div>
                        <p className={props.darkMode ? "copyright-dark" : "copyright-light"}>© Tristan Oshier 2021</p>
                    </div>
                </div>
            </Nav>
            <Routes darkMode={props.darkMode} />
        </div>
    )
}

export default Navbar;
