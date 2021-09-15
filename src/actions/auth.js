import axios from "axios"
import setAuthToken from '../utils/setAuthToken'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';



//load user
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get(`${process.env.BACKEND_API_ENDPOINT}/api/auth`);
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })

    }
}



//register user

export const register = ({ username, email, password }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, email, password })

    try {
        const res = await axios.post(`${process.env.BACKEND_API_ENDPOINT}/api/users`, body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser());

    } catch (err) {

        dispatch({
            type: REGISTER_FAIL
        })

    }
}



//login user

export const login = (email, password) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        const res = await axios.post(`${process.env.BACKEND_API_ENDPOINT}/api/auth`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser());

    } catch (err) {

        dispatch({
            type: LOGIN_FAIL
        })

    }
}


//LOGOUT USER 
export const logout = () => dispatch => {
    dispatch({type:LOGOUT})
    
}