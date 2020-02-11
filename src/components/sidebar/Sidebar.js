import React from "react";

import classes from './Sidebar.module.css'
import Menu from "./menu/Menu";

const Sidebar = () => {
    return (
        <aside className={classes.sidebar}>
           <Menu />
        </aside>
    )
}

export default Sidebar;