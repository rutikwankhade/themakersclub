import axios from 'axios';

import { GET_DISCUSS_POSTS, DISCUSS_POST_ERROR, ADD_DISCUSS_POST } from './types';

export const getDiscussPosts = () => async dispatch => {


    try {

        const res = await axios.get('https://themakersclub.herokuapp.com/api/discuss-posts');

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




//POST NEW DISCUSS POST

export const addDiscussPost = ({postTitle,postText}) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

        const body = JSON.stringify({ postTitle,postText })

    try {
        const res = await axios.post('https://themakersclub.herokuapp.com/api/discuss-posts',body,config);

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