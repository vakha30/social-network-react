import React from 'react';

import classes from './AddPost.module.css'

const AddPost = () => {
    return (
        <div className={classes.add_post}>
            <textarea /><br />
            <button>Add post</button>
        </div>
    )
}

export default AddPost;
