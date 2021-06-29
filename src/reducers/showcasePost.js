import {
    ADD_SHOWCASE_POST,
    SHOWCASE_POST_ERROR,
    GET_SHOWCASE_POSTS,
    GET_SHOWCASE_POST,
    ADD_FEEDBACK

} from "../actions/types";


const initialState = {
    showcasePosts: [],
    showcasePost: null,
    loading: true,
    error: {}

}


export default function showcasePostReducer( state = initialState, action) {

    const { type, payload } = action;

    switch (type) {

        case ADD_SHOWCASE_POST:
            return {
                ...state,
                showcasePosts: [...state.discussPosts, payload],
                loading: false
            }
        
        case SHOWCASE_POST_ERROR:
            return {
                ...state,
                error:payload,
                loading: false
            }
        
         case GET_SHOWCASE_POSTS:
            return {
                ...state,
                showcasePosts:payload,
                loading: false
            }
        
        case GET_SHOWCASE_POST:
            return {
                ...state,
                showcasePost:payload,
                loading: false
            }
        case ADD_FEEDBACK:
             return {
                ...state,
                loading: false
            }


        default: return state;
    }


}
