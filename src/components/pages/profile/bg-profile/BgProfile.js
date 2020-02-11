import React from 'react';

import classes from './BgProfile.module.css'

const BgProfile = (props) => {

    const bgStyle = {
        "backgroundImage": `url(${props.bg})`
    }

    return (
        <div style={bgStyle} className={classes.profile_bg}>

        </div>
    )
}

export default BgProfile;
