import React from 'react';

import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={classes.profile_info_wrap}>
            <div className={classes.profile_info_img}>
                <img src={props.user.avatar} alt="" />
            </div>
            <div className={classes.profile_info}>
                <h2>Name: {props.user.name}</h2>
                <p>Age: {props.user.age} years</p>
                <p>City: {props.user.city}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
