import React from 'react';

import classes from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";

const Dialogs = (props) => {
    const dialogsComponents = props.dialogs.map(dialog => <Dialog key={dialog.id} dialog={dialog}/>)
    return (
        <div className={classes.dialogs}>
            {dialogsComponents}
        </div>
    )
}

export default Dialogs;
