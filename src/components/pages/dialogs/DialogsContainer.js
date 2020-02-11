import React from 'react';

import classes from './DialogsContainer.module.css'
import Dialogs from "./dialogs/Dialogs";
import Messages from "./messages/Messages";

const DialogsContainer = () => {
    return (
        <div className={classes.dialogs_wrap}>
            <Dialogs />
            <Messages />
        </div>
    )
}

export default DialogsContainer;
