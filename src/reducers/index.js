import { combineReducers } from "redux";
import authReducer from "./auth";
import discussPostReducer from "./discussPost";
import resourcesReducer from "./resources";
import showcasePostsReducer from "./showcasePost";
import profileReducer from "./profile";





export default combineReducers({
    authReducer,
    discussPostReducer,
    resourcesReducer,
    showcasePostsReducer,
    profileReducer
});