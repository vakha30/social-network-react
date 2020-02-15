import React from 'react';

import classes from './MyPosts.module.css'
import AddPost from "./form/AddPost";
import Post from "./post/Post";

const MyPosts = (props) => {

    const postsComponents =  props.posts.map(post => <Post dispatch={props.dispatch} key={post.id} post={post}/>)
    return (
        <div className={classes.my_posts}>
            <AddPost dispatch={props.dispatch} newPost={props.newPost} />
            <div className={classes.posts_wrap}>
                {postsComponents}
            </div>
        </div>
    )
}

export default MyPosts;
