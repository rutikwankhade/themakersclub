import {
    GET_DISCUSS_POSTS,
    DISCUSS_POST_ERROR,
    ADD_DISCUSS_POST,
    GET_DISCUSS_POST,
    ADD_DISCUSS_COMMENT
} from "../actions/types";


const initialState = {
    discussPosts: [],
    discussPost: null,
    loading: true,
    error:{}
    
}




export default function discussPostReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case GET_DISCUSS_POSTS:
            return {
                ...state,
                discussPosts: payload,
                loading: false
                
            };
        
        case GET_DISCUSS_POST:
            return {
                ...state,
                discussPost: payload,
                loading: false
                
            };
        
        case DISCUSS_POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
                
            };
        
        case ADD_DISCUSS_POST:
            return {
                ...state,
                discussPosts:[...state.discussPosts, payload] ,
                loading: false
                
            };
        
        case ADD_DISCUSS_COMMENT:
            return {
                ...state,
                // discussPost: payload ,
                loading: false
                
            };
        
        default: return state;
        
    }




}