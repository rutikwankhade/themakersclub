import axios from 'axios';

import {
    ADD_SHOWCASE_POST,
    GET_SHOWCASE_POSTS,
    GET_SHOWCASE_POST,
    SHOWCASE_POST_ERROR
} from './types';


//add showcase post

export const addShowcasePost = ({ showcaseUrl, showcaseText,showcaseTitle }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ showcaseUrl, showcaseText, showcaseTitle })

    try {
        const res = await axios.post('https://themakersclub.herokuapp.com/api/showcase', body, config);

        dispatch({
            type: ADD_SHOWCASE_POST,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOWCASE_POST_ERROR,
            payload: { msg: err }
        })

    }
}





//get all showcase posts


export const getAllShowcasePosts = () => async dispatch => {

    try {

        const res = await axios.get('https://themakersclub.herokuapp.com/api/showcase');

        dispatch({
            type: GET_SHOWCASE_POSTS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: SHOWCASE_POST_ERROR,
            payload: { msg: err }
        })

    }
}



//GET SINGLE SHOWCASE POST
export const getShowcasePost = (id) => async dispatch => {

    try {

        const res = await axios.get(`https://themakersclub.herokuapp.com/api/showcase/${id}`);

        dispatch({
            type: GET_SHOWCASE_POST,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: SHOWCASE_POST_ERROR,
            payload: { msg: err }
        })

    }
}
