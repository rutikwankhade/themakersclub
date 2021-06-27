import axios from 'axios';

import {
    ADD_RESOURCE,
    RESOURCE_ERROR
} from '../actions/types'


export const postResource = ({ resourceUrl, resourceCategory }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ resourceUrl, resourceCategory })

    try {
        const res = await axios.post('https://themakersclub.herokuapp.com/api/resources', body, config);

        dispatch({
            type: ADD_RESOURCE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: RESOURCE_ERROR,
            payload: { msg: err }
        })

    }

}

