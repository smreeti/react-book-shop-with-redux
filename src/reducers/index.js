import {combineReducers} from "redux";
import addBookReducer from "./addBookReducer";
import {assignBookReducer} from "./assignBookReducer";
import {loginReducer} from "./loginReducer";

export default combineReducers({
    addBookReducer,
    assignBookReducer,
    loginReducer
})