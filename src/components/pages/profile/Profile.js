import React from 'react';

import classes from './Profile.module.css'
import BgProfile from "./bg-profile/BgProfile";
import ProfileInfo from "./profile-info/ProfileInfo";
import MyPosts from "./my-posts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.profile_wrap}>
            <BgProfile />
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;
