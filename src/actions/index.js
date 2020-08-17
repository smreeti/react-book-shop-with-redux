import {addBookConstants} from "./constants/addBookConstants";
import {assignBookConstants} from "./constants/assignBookConstants";
import {LOGIN} from "./constants/loginConstants";

const {
    ADD_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK
} = addBookConstants;

const {
    ASSIGN_BOOK,
    FILTER_ASSIGNED_BOOK
} = assignBookConstants;

export const submitBook = (data) => ({
    type: ADD_BOOK,
    payload: data
});

export const updateBook = (data) => ({
    type: UPDATE_BOOK,
    payload: data
});

export const deleteBook = (id) => ({
    type: DELETE_BOOK,
    payload: id
});

export const assignBook = (data) => ({
    type: ASSIGN_BOOK,
    payload: data
});

export const filterAssignedBook = (data) => ({
    type: FILTER_ASSIGNED_BOOK,
    payload: data
});

export const login = (isLoggedIn) => ({
    type: LOGIN,
    payload:isLoggedIn
});