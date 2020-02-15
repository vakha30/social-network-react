import React from 'react';

import classes from './Post.module.css'

const Post = (props) => {


    return (
        <div className={classes.post} >
            <div className={classes.post_wrap}>
                <div className={classes.avatar}>
                    <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
                         alt=""/>
                </div>
                <div className={classes.post_message}>
                    {props.post.post}
                </div>
            </div>
            <span>Like: {props.post.like}</span>
        </div>
    )
}

export default Post;
