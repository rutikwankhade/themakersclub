import axios from 'axios';

import { GET_DISCUSS_POSTS, DISCUSS_POST_ERROR } from './types';

export const getDiscussPosts = () => async dispatch => {
    

    try {

        const res = await axios.get('https://themakersclub.herokuapp.com/api/discuss-posts');

        dispatch({
            type: GET_DISCUSS_POSTS,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type: DISCUSS_POST_ERROR,
            payload:{msg:err.response.statusText}
        })
        
    }
}