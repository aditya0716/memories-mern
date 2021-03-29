import {CREATE_POST, FETCH_ALL, UPDATE_POST, DELETE_POST, LIKE_POST} from '../actions/actionTypes';

export default function posts(posts= [], action) {
    switch (action.type) {
        case FETCH_ALL:
            return action.data;
        case CREATE_POST:
            return [...posts, action.data];
        case UPDATE_POST:
            return posts.map((post) => post._id === action.data._id ? action.data : post)
        case DELETE_POST:
            return posts.filter((post) => post._id !== action.id)
        case LIKE_POST:
            return posts.map((post) => post._id === action.data._id ? action.data : post)
        default:
            return posts;
    }
}