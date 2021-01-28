import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
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
                        <Link className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"} to="/About">About</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"} to="/Coding">Coding</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"} to="/Music">Music</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"} to="/Blog">Blog</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link className={props.darkMode ? "nav-link-darkmode" : "nav-link-lightmode"} to="/Contact">Contact</Link>
                    </NavItem>
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
                </div>
            </Nav>
            <Routes darkMode={props.darkMode} />

        </div>
    )
}

export default Navbar;
