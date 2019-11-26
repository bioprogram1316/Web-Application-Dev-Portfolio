import React from 'react';
import Nav from 'react-bootstrap/Nav';

import classes from './SocialLinks.module.css';
import Github from '../../assets/images/github_Blue.svg';
import LinkedIn from '../../assets/images/linkedin_Blue.svg';

const socialLinks = () => (
    <Nav as="ul" className={classes.SocialLinks}>
        <Nav.Item as="li">
            <Nav.Link href="https://github.com/bioprogram1316" target="_blank">
                <img src={Github} alt="Github"/>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="https://www.linkedin.com/in/carline-durmus-961350143/" target="_blank">
                <img src={LinkedIn} alt="LinkedIn"/>
            </Nav.Link>
        </Nav.Item>
    </Nav>
);

export default socialLinks;