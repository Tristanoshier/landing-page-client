import React, { Fragment } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Routes } from './Routes';

export const Navbar = () => {
    return (
        <Fragment>
            <Nav>
                <NavItem>
                    <Link to="/">Tristan Oshier</Link>
                </NavItem>
                <NavItem>
                    <Link to="/About">About</Link>
                </NavItem>
                <NavItem>
                    <Link to="/Coding">Coding</Link>
                </NavItem>
                <NavItem>
                    <Link to="/Music">Music</Link>
                </NavItem>
                <NavItem>
                    <Link to="/Blog">Blog</Link>
                </NavItem>
                <NavItem>
                    <Link to="/Contact">Contact</Link>
                </NavItem>
            </Nav>
            <Routes />
        </Fragment>
    )
}
