import axios from 'axios';

import {
    ADD_RESOURCE,
    RESOURCE_ERROR,
    GET_ALL_RESOURCES
} from '../actions/types'


//post a new resource
export const postResource = ({ resourceUrl, resourceCategory }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ resourceUrl, resourceCategory })

    try {
        const res = await axios.post('https://themakersclubapp.herokuapp.com/api/resources', body, config);

        dispatch({
            type: ADD_RESOURCE,
            payload: res.data
        })
        return res;

    } catch (err) {
        dispatch({
            type: RESOURCE_ERROR,
            payload: { msg: err }
        })

    }

}

//get all resources
export const getAllResources = () => async dispatch => {

    try {

        const res = await axios.get('https://themakersclubapp.herokuapp.com/api/resources');

        dispatch({
            type: GET_ALL_RESOURCES,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: RESOURCE_ERROR,
            payload: { msg: err }
        })

    }
}

