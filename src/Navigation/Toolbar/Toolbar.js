import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavigationItems from '../NavigationItems/NavigationItems';
import SocialLinks from '../SocialLinks/SocialLinks';

const toolbar = () => (
    <Navbar fixed="top" bg="dark" variant="dark" expand="md" >
        <Navbar.Brand>Carline Durmus</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbar-navitems">
            <Nav className="mr-auto">
                <NavigationItems />
            </Nav>
            <Nav className="justify-content-end">
                <SocialLinks />
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default toolbar;