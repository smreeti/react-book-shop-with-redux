import {ADD_BOOK, DELETE_BOOK, EDIT_BOOK_STATUS, UPDATE_BOOK} from "./constants/action-types";

export const submitBook = (data) => ({
    type: ADD_BOOK,
    payload: data
});

export const editBookStatus = () => ({
    type: EDIT_BOOK_STATUS,
});

export const updateBook = (data) => ({
    type: UPDATE_BOOK,
    payload: data
});

export const deleteBook = (id)=>({
    type: DELETE_BOOK,
    payload: id
});