import React from 'react';

import classes from '../Messages.module.css'

const Message = (props) => {
    return (
        <div className={classes.message}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque est modi nobis ratione. Consectetur
                dicta eum exercitationem. </p>
        </div>
    )
}

export default Message;
