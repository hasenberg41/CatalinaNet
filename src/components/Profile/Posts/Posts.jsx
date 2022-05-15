import React from 'react';
import Post from './Post/Post';
import classes from './Posts.module.css';

const Posts = () => {
    return (
        <div>
            Posts
            <div className={classes.posts}>
                <Post />
            </div>
        </div>
    );
}

export default Posts;