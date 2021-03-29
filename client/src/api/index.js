import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})

// const APIUrls = {
//     signinURL: `${API_ROOT}/user/signin`,
//     signupURL: `${API_ROOT}/user/signup`,

//     fetchPostsURL: `${API_ROOT}/posts/getposts`,
//     createPostsURL: `${API_ROOT}/posts/createpost`,
//     updatePostURL: `${API_ROOT}/posts/updatepost`,
//     deletePostURL: `${API_ROOT}/posts/deletepost`,
//     likePostURL: `${API_ROOT}/posts/likepost`,

// }

// const APIUrls = {
//     fetchPostsURL: () => "http://localhost:5000/posts/getposts",
//     createPostsURL: () => "http://localhost:5000/posts/createpost",
//     updatePostURL: () => "http://localhost:5000/posts/updatepost/",
// }

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchPosts = () => API.get('/posts/getposts');
export const createPost = (newPost) => API.post('/posts/createpost', newPost);
export const updatePost = (id, updatedPost) => API.post(`/posts/updatepost/${id}`, updatedPost);
export const deletepost = (id) => API.delete(`/posts/deletepost/${id}`);
export const likePost = (id) => API.post(`/posts/likepost/${id}`);
