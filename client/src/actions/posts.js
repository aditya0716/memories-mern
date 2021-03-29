import {FETCH_ALL, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST} from './actionTypes';
import * as api from '../api';

export const getPosts= () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts(); // from reaponse we extract data
        dispatch(fetchall(data));
    } catch (error) {
        console.log(error);
    }
}

export function fetchall(data) {
    return {
        type: FETCH_ALL,
        data
    }
}

// ----------------------------------------------------------------------------------------------------
export const createPost= (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post); // from reaponse we extract data
        dispatch(creatingPost(data));
    } catch (error) {
        console.log(error);
    }
}

export function creatingPost(data) {
    return {
        type: CREATE_POST,
        data
    }
}

// ----------------------------------------------------------------------------------------------------

export const updatePost = (id, post) => async (dispatch) => {
    try {
        console.log(post);
        const {data} = await api.updatePost(id, post);

        dispatch(updatingPost(data))
    } catch (error) {
        console.log(error);
    }
}


export function updatingPost(data) {
    return {
        type: UPDATE_POST,
        data
    }
}

// ----------------------------------------------------------------------------------------------------

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletepost(id);

        dispatch(deletingPost(id))
    } catch (error) {
        console.log(error);
    }
}

export function deletingPost(id) {
    return {
        type: DELETE_POST,
        id
    }
}

// ----------------------------------------------------------------------------------------------------

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id);

        dispatch(likingPost(data))
    } catch (error) {
        console.log(error)
    }
}

export function likingPost(data) {
    return {
        type: LIKE_POST,
        data
    }
}