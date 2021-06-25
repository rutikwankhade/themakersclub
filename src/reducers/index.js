import { combineReducers } from "redux";
import authReducer from "./auth";
import discussPostReducer from "./discussPost";


export default combineReducers({
    authReducer,
    discussPostReducer
});