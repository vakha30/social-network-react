import React from 'react';

import classes from './Menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <ul className={classes.menu}>
            <li>
                <NavLink exact to="/" activeClassName={classes.active}>Profile</NavLink>
            </li>
            <li>
                <NavLink to="dialogs" activeClassName={classes.active}>Dialogs</NavLink>
            </li>
            <li>
                <NavLink to="news" activeClassName={classes.active}>News</NavLink>
            </li>
        </ul>
    )
}

export default Menu;
