import React from 'react';
import './Posts.css';
import {useSelector} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';
import Post from './Post/Post';

function Posts({setCurrentId}) {
    const posts = useSelector((state) => state.posts);
    console.log("POSTS",posts);
    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className="posts__container" container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}
export default Posts;