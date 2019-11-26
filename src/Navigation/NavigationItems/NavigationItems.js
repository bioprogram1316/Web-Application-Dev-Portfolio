import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/experience" >Portfolio/Experience</NavigationItem>
        <NavigationItem link="/education" >Education</NavigationItem>
        <NavigationItem link="/about" >About Me</NavigationItem>
    </ul>
);

export default navigationItems;