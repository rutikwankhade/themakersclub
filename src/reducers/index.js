import { combineReducers } from "redux";
import authReducer from "./auth";
import discussPostReducer from "./discussPost";
import resourcesReducer from "./resources";



export default combineReducers({
    authReducer,
    discussPostReducer,
    resourcesReducer
});