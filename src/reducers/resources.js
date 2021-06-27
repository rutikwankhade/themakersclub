import {
    ADD_RESOURCE,
    RESOURCE_ERROR,
    GET_ALL_RESOURCES
} from "../actions/types";


const initialState = {
    resources: [],
    loading: true,
    error:{}   
}


export default function resourcesReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_RESOURCE:
            return {
                ...state,
                resources:[...state.resources, payload] ,
                loading: false
                
            };
        
        case RESOURCE_ERROR:
            return {
                ...state,
                 error: payload,
                loading: false
                
            };
        
        case GET_ALL_RESOURCES:
            return {
                ...state,
                resources:payload ,
                loading: false  
            };
        
        default: return state;

    }

}