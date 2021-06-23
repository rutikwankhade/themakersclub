import axios from "axios"

import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';



//register user

export const register = ({ userName, email, password }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ userName, email, password })

    try {
        const res = await axios.post('http://localhost:5000/api/users', body,config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err) {

        dispatch({
            type: REGISTER_FAIL
        })

    }
}