import React from 'react';

import classes from '../Messages.module.css'

const MessageSend = (props) => {
    return (
        <div className={classes.message_send}>
            <textarea placeholder="Enter message..." />
            <button>Send</button>
        </div>
    )
}

export default MessageSend;
