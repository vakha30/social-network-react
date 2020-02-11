import React from 'react'

import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={classes.header}>
            <NavLink exact to="/">
                <img src="https://zg-brand.ru/images/Statyi/logo.png" alt=""/>
            </NavLink>
        </div>
    )
}

export default Header;
