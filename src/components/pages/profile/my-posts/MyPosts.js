import React from 'react';

import classes from './MyPosts.module.css'
import AddPost from "./form/AddPost";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className={classes.my_posts}>
            <AddPost />
            <div className={classes.posts_wrap}>
                <Post />
                <Post />
                <Post />
            </div>

        </div>
    )
}

export default MyPosts;
