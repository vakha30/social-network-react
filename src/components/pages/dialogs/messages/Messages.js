import React from 'react';

import classes from './Messages.module.css'
import Message from "./message/Message";
import MessageSend from "./message-send/MessageSend";

const Messages = (props) => {
    return (
        <div className={classes.messages_wrap}>
            <div className={classes.messages}>
                <Message />
            </div>
            <MessageSend />
        </div>
    )
}

export default Messages;
