import React from 'react';

import classes from './AddPost.module.css'

let newPostText = React.createRef();

const AddPost = (props) => {

    const handleNewPostChange = () => {
        let text = newPostText.current.value;
        let action = {
            type: "UPDATE-POST",
            post: text
        }
        props.dispatch(action);
    }
    const addNewPost = () => {
        let action = {
            type: "ADD-POST"
        }
        props.dispatch(action)
    }
    return (
        <div className={classes.add_post}>
            <textarea onChange={handleNewPostChange} ref={newPostText} value={props.newPost}  /><br />
            <button onClick={addNewPost}>Add post</button>
        </div>
    )
}

export default AddPost;
