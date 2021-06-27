import {
    ADD_SHOWCASE_POST,

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

        default: return state;
    }


}
