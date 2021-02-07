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
    const navbarItems = ['Interests', 'Blog', 'Contact'];
    const linkedInURL = 'https://www.linkedin.com/in/tristan-oshier-678420196/';
    const githubURL = 'https://github.com/Tristanoshier';


    const darkOrLightMode = (darkClass, lightClass) => {
        return props.darkMode ? darkClass : lightClass;
    }

    const classForMobile = (mobileDark, mobileLight, dark, light) => {
        return sidebar && props.darkMode ? mobileDark :
            sidebar && !props.darkMode ? mobileLight :
                !sidebar && props.darkMode ? dark
                    : light;
    }

    const navHomeSection = () => {
        return (
            <span className='mobile-main-nav-section'>
                <NavItem className='nav-item'>
                    <NavLink
                        activeClassName={darkOrLightMode('active-dark', 'active-light')}
                        tag={RRNavLink}
                        onClick={openSidebar}
                        className={darkOrLightMode('mobile-home-link-darkmode', 'mobile-home-link-lightmode')}
                        to='/'>Tristan Oshier
                        </NavLink>
                </NavItem>
                <NavItem className='main-nav-item'>
                    <Link className={darkOrLightMode('main-nav-link-darkmode', 'main-nav-link-lightmode')} to='/'>Tristan Oshier</Link>
                    <button className={darkOrLightMode('mobile-exit-button-dark', 'mobile-exit-button-light')}
                        onClick={openSidebar}>
                        <FontAwesomeIcon icon={faTimes} size='2x' />
                    </button>
                </NavItem>
            </span>
        )
    }

    const navItemSection = () => {
        return navbarItems.map((name, index) => {
            return (
                <NavItem className='nav-item' key={index}>
                    <NavLink
                        activeClassName={darkOrLightMode('active-dark', 'active-light')}
                        onClick={openSidebar}
                        tag={RRNavLink}
                        className={darkOrLightMode('nav-link-darkmode', 'nav-link-lightmode')}
                        to={`/${name}`}>{name}
                    </NavLink>
                </NavItem>
            )
        })
    }

    const socialMediaSection = () => {
        return (
            <div className='social-media'>
                <li><a className={darkOrLightMode('social-link-dark', 'social-link-light')}
                    href={linkedInURL}
                    target='_linkedin' >
                    <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </a></li>
                <li><a className={darkOrLightMode('social-link-dark', 'social-link-light')}
                    href={githubURL}
                    target='_github' ><FontAwesomeIcon
                        icon={faGithubSquare} size='2x' />
                </a></li>
            </div>
        )
    }

    const lightAndDarkModeToggle = () => {
        return (
            <div className='toggle-container'>
                <span className='sun' style={{ color: darkOrLightMode('var(--gray)', 'var(--orange)') }}>☀︎</span>
                <span className='toggle'>
                    <input
                        checked={props.darkMode}
                        onChange={() => props.setDarkMode(prevMode => !prevMode)}
                        type='checkbox'
                        className='checkbox'
                        id='checkbox' />
                    <label htmlFor='checkbox' />
                </span>
                <span className='moon' style={{ color: darkOrLightMode('var(--white)', 'var(--gray)') }}>☾</span>
            </div>
        )
    }

    const copyright = () => {
        return <p className={darkOrLightMode('copyright-dark', 'copyright-light')}>© Tristan Oshier 2021</p>
    }

    const hamburger = () => {
        return (
            <button className={classForMobile('hamburger-dark active', ' hamburger-light active', 'hamburger-dark', 'hamburger-light')}
                onClick={openSidebar}><FontAwesomeIcon icon={faBars} size='2x' />
            </button>
        )
    }

    const navbar = () => {
        return (
            <>
                {hamburger()}
                <Nav className={classForMobile('nav-dark active', 'nav-light active', 'nav-dark', 'nav-light')}>
                    {navHomeSection()}
                    <div className='nav-items-section'>
                        {navItemSection()}
                        {socialMediaSection()}
                        {lightAndDarkModeToggle()}
                        {copyright()}
                    </div>
                </Nav>
                <Routes darkMode={props.darkMode} />
            </>
        )
    }

    return (
        <div className='main-nav'>
            {navbar()}
        </div>
    )
}

export default Navbar;
