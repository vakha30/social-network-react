import React from 'react';

import classes from '../Messages.module.css'

const Message = (props) => {
    return (
        <div className={classes.message}>
            <p>{props.message.message} </p>
        </div>
    )
}

export default Message;
