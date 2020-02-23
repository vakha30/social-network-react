import React from 'react';

import classes from './Profile.module.css'
import BgProfile from "./bg-profile/BgProfile";
import ProfileInfo from "./profile-info/ProfileInfo";
import MyPosts from "./my-posts/MyPosts";
import MyPostsContainer from "./my-posts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.profile_wrap}>
            <BgProfile bg={props.store.getState().profilePage.users[0].bg} />
            <ProfileInfo user={props.store.getState().profilePage.users[0]} />
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;
