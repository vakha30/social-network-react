import React from 'react';

import classes from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <Dialog id={1}/>
            <Dialog id={2} />
            <Dialog id={3} />
        </div>
    )
}

export default Dialogs;
