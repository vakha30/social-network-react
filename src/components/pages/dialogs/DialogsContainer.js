import React from 'react';

import classes from './DialogsContainer.module.css'
import Dialogs from "./dialogs/Dialogs";
import Messages from "./messages/Messages";

const DialogsContainer = (props) => {
    return (
        <div className={classes.dialogs_wrap}>
            <Dialogs dialogs={props.dialogsPage.dialogs} />
            <Messages messages={props.dialogsPage.messages} />
        </div>
    )
}

export default DialogsContainer;
