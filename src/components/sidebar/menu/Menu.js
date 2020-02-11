import React from 'react';

import classes from 'Menu.module.css'

const Menu = () => {
    return (
        <ul className={classes.menu}>
            <li><a href="/">Profile</a></li>
            <li><a href="/">Dialogs</a></li>
            <li><a href="/">News</a></li>
        </ul>
    )
}

export default Menu;
