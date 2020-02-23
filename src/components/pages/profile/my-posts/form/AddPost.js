import React from 'react';

import classes from './AddPost.module.css'
import {addPostActionCreator, updatePostActionCreator} from "../../../../../redux/reducers/profile-reducer";

let newPostText = React.createRef();

const AddPost = (props) => {

    const handleNewPostChange = () => {
        let text = newPostText.current.value;
        props.updateNewPost(text);
    };
    const addNewPost = () => {
        props.addNewPost();
    };
    return (
        <div className={classes.add_post}>
            <textarea onChange={handleNewPostChange} ref={newPostText} value={props.newPost}  /><br />
            <button onClick={addNewPost}>Add post</button>
        </div>
    )
}

export default AddPost;
