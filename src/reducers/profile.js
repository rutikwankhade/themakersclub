import {
    EDIT_PROFILE,
    EDIT_PROFILE_ERROR,
    UPDATE_POINTS
} from '../actions/types'


const initialState = {
    userProfile: {},
    loading: true,
    error: {}
}



export default function profileReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case EDIT_PROFILE:
            return {
                ...state,
                userProfile: payload,
                loading: false
            };
        
        case UPDATE_POINTS:
            return {
                ...state,
                userProfile: payload,
                loading: false
            };

        case EDIT_PROFILE_ERROR:
            return {
                ...state,
                loading: false
            };
        default: return state;
    }

}
