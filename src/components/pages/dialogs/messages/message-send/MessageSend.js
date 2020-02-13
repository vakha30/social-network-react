import React from 'react';

import classes from '../Messages.module.css'

const MessageSend = (props) => {

    let textMessage = React.createRef();

    const handleChange = () => {
        props.updateMessage(textMessage.current.value);
    }

    const handleClick = () => {
        props.addNewMessage(textMessage.current.value);
    }

    return (
        <div className={classes.message_send}>
            <textarea onChange={handleChange} ref={textMessage} value={props.newMessage} placeholder="Enter message..." />
            <button onClick={handleClick}>Send</button>
        </div>
    )
}

export default MessageSend;
