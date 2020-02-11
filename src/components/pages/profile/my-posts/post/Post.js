import React from 'react';

import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.post_wrap}>
                <div className={classes.avatar}>
                    <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
                         alt=""/>
                </div>
                <div className={classes.post_message}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi aperiam, consequatur ducimus ex
                    fuga iste libero magni minus molestiae natus neque nobis placeat porro possimus rem, sed tenetur,
                    veritatis.
                </div>
            </div>
            <span>Like: 0</span>
        </div>
    )
}

export default Post;
