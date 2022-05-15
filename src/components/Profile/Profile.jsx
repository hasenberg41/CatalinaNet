import React from 'react';
import Posts from './Posts/Posts';
import Classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <img id={Classes.gachi} src='https://c.tenor.com/6V1ooQVn3CQAAAAd/gachi-fist.gif' alt='gachi-slaves' />
            <div>ava + description</div>
            <Posts />
        </div>
    );
}

export default Profile;