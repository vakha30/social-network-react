import React from 'react';

import classes from './Messages.module.css'
import Message from "./message/Message";
import MessageSend from "./message-send/MessageSend";

const Messages = (props) => {
    const messagesComponents = props.messages.map(message => <Message key={message.id} message={message}/>)
    return (
        <div className={classes.messages_wrap}>
            <div className={classes.messages}>
                {messagesComponents}
            </div>
            <MessageSend  addNewMessage={props.addNewMessage} updateMessage={props.updateMessage} newMessage={props.newMessage} />
        </div>
    )
}

export default Messages;
