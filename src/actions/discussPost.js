import axios from 'axios';

import {
    GET_DISCUSS_POSTS,
    GET_DISCUSS_POST,
    DISCUSS_POST_ERROR,
    ADD_DISCUSS_POST,
    ADD_DISCUSS_COMMENT
} from './types';



export const getDiscussPosts = () => async dispatch => {

    try {

        const res = await axios.get(`${process.env.BACKEND_API_ENDPOINT}/api/discuss-posts`);

        dispatch({
            type: GET_DISCUSS_POSTS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: DISCUSS_POST_ERROR,
            payload: { msg: err }
        })

    }
}



//GET SINGLE DISCUSS POST
export const getDiscussPost = (id) => async dispatch => {

    try {

        const res = await axios.get(`${process.env.BACKEND_API_ENDPOINT}/api/discuss-posts/${id}`);

        dispatch({
            type: GET_DISCUSS_POST,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: DISCUSS_POST_ERROR,
            payload: { msg: err }
        })

    }
}


//POST NEW DISCUSS POST

export const addDiscussPost = ({ postTitle, postText }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ postTitle, postText })

    try {
        const res = await axios.post(`${process.env.BACKEND_API_ENDPOINT}/api/discuss-posts`, body, config);

        dispatch({
            type: ADD_DISCUSS_POST,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DISCUSS_POST_ERROR,
            payload: { msg: err }
        })

    }
}

// ADD COMMENT ON DISCUSS POST


export const addDiscussComment = (postId, { commentText }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ commentText })
    // console.log(body)


    try {
        const res = await axios.post(`${process.env.BACKEND_API_ENDPOINT}/api/discuss-posts/comment/${postId}`, body, config);
        console.log(res)
        dispatch({
            type: ADD_DISCUSS_COMMENT,
            // payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DISCUSS_POST_ERROR,
            payload: { msg: err }
        })

    }
}

