import React from 'react';

import classes from './AddPost.module.css'

let newPostText = React.createRef();

const AddPost = (props) => {
    // const handleNewPostChange = () => {
    //     props.handleNewPostChange(newPostText.current.value)
    // }
    const addNewPost = () => {
        props.addNewPost(newPostText.current.value, props.id)
    }
    return (
        <div className={classes.add_post}>
            <textarea ref={newPostText} /><br />
            <button onClick={addNewPost}>Add post</button>
        </div>
    )
}

export default AddPost;
