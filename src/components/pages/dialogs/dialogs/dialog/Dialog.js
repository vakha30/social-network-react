import React from 'react';

import classes from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>Djoni</NavLink>
        </div>
    )
}

export default Dialog;
