import {ADD_BOOK, ASSIGN_BOOK, DELETE_BOOK, FILTER_ASSIGNED_BOOK, UPDATE_BOOK} from "./constants/action-types";

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