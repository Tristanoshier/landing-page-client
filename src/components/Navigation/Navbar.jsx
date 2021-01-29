import React from 'react';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { Routes } from './Routes';

const Navbar = (props) => {
    return (
        <div className="main-nav">
            <Nav className="nav">
                <NavItem className="main-nav-item">
                    <Link className={props.darkMode ? "main-nav-link-darkmode" : "main-nav-link-lightmode"} to="/">Tristan Oshier</Link>
                </NavItem>

                <div className="nav-items-section">
                    <NavItem className="nav-item">
                        <NavLink
                            activeClassName={props.darkMode ? "active-dark" : "active-light"}
                            tag={RRNavLink}
                            className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"}
                            to="/About">About
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink
                            activeClassName={props.darkMode ? "active-dark" : "active-light"}
                            tag={RRNavLink}
                            className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"}
                            to="/Coding">Coding
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink
                            activeClassName={props.darkMode ? "active-dark" : "active-light"}
                            tag={RRNavLink}
                            className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"}
                            to="/Music">Music
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink
                            activeClassName={props.darkMode ? "active-dark" : "active-light"}
                            tag={RRNavLink}
                            className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"}
                            to="/Blog">Blog
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink
                            activeClassName={props.darkMode ? "active-dark" : "active-light"}
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
