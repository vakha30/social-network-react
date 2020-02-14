import React from 'react';

import classes from '../Messages.module.css'

const MessageSend = (props) => {

    let textMessage = React.createRef();

    const handleChange = () => {
        let {value} = textMessage.current
        let action = {
            type: "UPDATE-MESSAGE",
            message: value
        }
        props.dispatch(action)
    }

    const handleClick = () => {
        let action = {
            type: "ADD-MESSAGE"
        }
        props.dispatch(action)
    }

    return (
        <div className={classes.message_send}>
            <textarea onChange={handleChange} ref={textMessage} value={props.newMessage} placeholder="Enter message..." />
            <button onClick={handleClick}>Send</button>
        </div>
    )
}

export default MessageSend;
