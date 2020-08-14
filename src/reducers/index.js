import {combineReducers} from "redux";
import addBookReducer from "./addBookReducer";
import {assignBookReducer} from "./assignBookReducer";

export default combineReducers({
    addBookReducer,
    assignBookReducer
})