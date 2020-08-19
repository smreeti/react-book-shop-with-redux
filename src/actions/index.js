import {addBookConstants} from "./constants/addBookConstants";
import {assignBookConstants} from "./constants/assignBookConstants";
import {LOGIN, LOGOUT} from "./constants/loginConstants";
import {userConstants} from "./constants/userConstants";

const {
    ADD_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK
} = addBookConstants;

const {
    ASSIGN_BOOK,
    FILTER_ASSIGNED_BOOK
} = assignBookConstants;

const {
    FETCH_USERS_BEGIN,
    FETCH_USERS,
    SAVE_USER,
    HANDLE_USER_ACTION_ERROR
} = userConstants;

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

export const login = () => ({
    type: LOGIN
});

export const logout = () => ({
    type: LOGOUT
});

export const fetchUsersBegin = () => ({
    type: FETCH_USERS_BEGIN
});

export const fetchUsers = (data) => ({
    type: FETCH_USERS,
    payload: data
});

export const saveUsers = (saveData) => ({
    type: SAVE_USER,
    payload: saveData
});

export const handleUserError = (errorMessage) => ({
    type: HANDLE_USER_ACTION_ERROR,
    payload: errorMessage
});

