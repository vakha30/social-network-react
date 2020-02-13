import React from 'react';

import classes from './AddPost.module.css'

let newPostText = React.createRef();

const AddPost = (props) => {
    const handleNewPostChange = () => {
        props.handleNewPostChange(newPostText.current.value)
    }
    const addNewPost = () => {
        props.addNewPost(newPostText.current.value)
    }
    return (
        <div className={classes.add_post}>
            <textarea onChange={handleNewPostChange} ref={newPostText} value={props.newPost}  /><br />
            <button onClick={addNewPost}>Add post</button>
        </div>
    )
}

export default AddPost;
