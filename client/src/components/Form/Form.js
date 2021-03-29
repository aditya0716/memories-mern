import React, { useState, useEffect } from 'react';
import {TextField, Button, Paper, Typography} from '@material-ui/core';
import FileBase from 'react-file-base64';
import './Form.css';
import {useDispatch, useSelector} from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

function Form({currentId, setCurrentId}) {
    const [postData, setPostData] = useState({
        // creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.posts.find((pst) => pst._id === currentId) : null);
    const user = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        // populate form while updating
        if (post) {
            setPostData(post);
        }
    }, [post]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(currentId)
        if (currentId) {
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name }))  // if we have id then we are updating post
        } else {
            dispatch(createPost({...postData, name: user?.result?.name }))  // else we are creating post
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            // creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }

    if (!user?.result?.name) {
        return (
            <Paper className="form__paper">
                <Typography variant="h6" align="center">
                    Please login to create Memories!
                </Typography>
            </Paper>
        )
    }
    return (
        <Paper className="form__paper">
            <h4 className="form__heading">{currentId ? 'Editing' : 'Creating'} Memory</h4>
            <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
                {/* <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth 
                    value={postData.creator} 
                    onChange={(e) => setPostData({...postData, creator: e.target.value})} 
                /> */}
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth 
                    value={postData.title} 
                    onChange={(e) => setPostData({...postData, title: e.target.value})} 
                />
                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth 
                    value={postData.message} 
                    onChange={(e) => setPostData({...postData, message: e.target.value})} 
                />
                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth 
                    value={postData.tags} 
                    onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})} 
                />
                {/* <div className="form__fileInput"> */}
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                    />
                {/* </div> */}
                <Button 
                    type="submit" 
                    className="form__btnSubmit" 
                    variant="contained" 
                    color="primary" 
                    size="large">
                        Submit
                </Button>
                <Button 
                    onClick={clear} 
                    className="form__btnSubmit" 
                    variant="contained" 
                    color="secondary" 
                    size="small">
                        Clear
                </Button>
            </form>
        </Paper>
    );
}

export default Form;