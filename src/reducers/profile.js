import {
    EDIT_PROFILE,
    EDIT_PROFILE_ERROR,
    UPDATE_POINTS,
    GET_TOP_MAKERS,
    TOP_MAKERS_ERROR,
    GET_MAKER_PROFILE
} from '../actions/types'


const initialState = {
    userProfile: {},
    topMakers: [],
    makerProfile:{},
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
        
        case GET_TOP_MAKERS:
            return {
                ...state,
                topMakers:payload ,
                loading: false  
            };
        
        case GET_MAKER_PROFILE:
            return {
                ...state,
                makerProfile:payload ,
                loading: false  
            };
        
        case TOP_MAKERS_ERROR:
            return {
                ...state,
                loading: false
            };
        
        default: return state;
    }

}
