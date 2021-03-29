import {AUTH, LOGOUT} from './actionTypes';
import * as api from '../api';


export function googleLogin(result, token) {
    return {
        type: AUTH,
        data: {result, token}
    }
}

export function logoutUser() {
    return {
        type: LOGOUT
    }
}

export const signin = (formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signIn(formData);

        dispatch(signingInUser(data));

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export function signingInUser(data) {
    return {
        type: AUTH,
        data
    }
}

// ----------------------------------------------------------------------------------------------------

export const signup = (formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signUp(formData);

        dispatch(signingUpUser(data));

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export function signingUpUser(data) {
    return {
        type: AUTH,
        data
    }
}