import axios from 'axios';
import {
    EDIT_PROFILE,
    EDIT_PROFILE_ERROR,
    UPDATE_POINTS
} from './types'



//edit user profile

export const editProfile = ({ bio, website, twitter, github, linkedin }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ bio, website, twitter, github, linkedin })

    try {
        const res = await axios.post('https://themakersclubapp.herokuapp.com/api/profile', body, config);

        dispatch({
            type: EDIT_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: EDIT_PROFILE_ERROR,
            payload: { msg: err }
        })

    }
}



//update the makers points

export const updatePoints = ({ points, boost }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }


    points = points + boost;
    const body = JSON.stringify({points })

    try {
        const res = await axios.post('https://themakersclubapp.herokuapp.com/api/profile/points', body, config);

        dispatch({
            type: UPDATE_POINTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: EDIT_PROFILE_ERROR,
            payload: { msg: err }
        })

    }
}
