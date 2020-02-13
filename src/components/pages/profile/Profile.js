import React from 'react';

import classes from './Profile.module.css'
import BgProfile from "./bg-profile/BgProfile";
import ProfileInfo from "./profile-info/ProfileInfo";
import MyPosts from "./my-posts/MyPosts";

const Profile = (props) => {
    return (
        <div className={classes.profile_wrap}>
            <BgProfile bg={props.profilePage.users[0].bg} />
            <ProfileInfo user={props.profilePage.users[0]} />
            <MyPosts  handleNewPostChange={props.handleNewPostChange} addNewPost={props.addNewPost} newPost={props.profilePage.newPost} posts={props.profilePage.posts}/>
        </div>
    )
}

export default Profile;
