import axios from 'axios';

import {
    ADD_SHOWCASE_POST,
    GET_SHOWCASE_POSTS,
    GET_SHOWCASE_POST,
    ADD_FEEDBACK,
    SHOWCASE_POST_ERROR
} from './types';


//add showcase post

export const addShowcasePost = ({ showcaseUrl, showcaseText, showcaseTitle }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ showcaseUrl, showcaseText, showcaseTitle })

    try {
        const res = await axios.post('https://themakersclubapp.herokuapp.com/api/showcase', body, config);

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

        const res = await axios.get('https://themakersclubapp.herokuapp.com/api/showcase');

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

        const res = await axios.get(`https://themakersclubapp.herokuapp.com/api/showcase/${id}`);

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


// ADD FEEDBACK TO SHOWCASE POST


export const addFeedback = (postId, { feedbackText, feedbackType }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ feedbackText, feedbackType })
    console.log(body)


    try {
        const res = await axios.post(`https://themakersclubapp.herokuapp.com/api/showcase/feedback/${postId}`, body, config);
        console.log(res)
        dispatch({
            type: ADD_FEEDBACK,
            // payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SHOWCASE_POST_ERROR,
            payload: { msg: err }
        })

    }
}

