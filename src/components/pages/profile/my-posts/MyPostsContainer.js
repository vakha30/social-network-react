import React from 'react';

import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostActionCreator} from "../../../../redux/reducers/profile-reducer";

const MyPostsContainer = (props) => {

    let {profilePage} = props.store.getState();

    const updateNewPost = (text) => {
        const action = updatePostActionCreator(text);
        props.store.dispatch(action);
    };

    const addNewPost = () => {
        const action = addPostActionCreator();
        props.store.dispatch(action);
    };


    return <MyPosts
        profilePage={profilePage}
        updateNewPost={updateNewPost}
        addNewPost={addNewPost}
    />
};

export default MyPostsContainer;
