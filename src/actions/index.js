import {ADD_BOOK} from "./constants/action-types";

export const submitBook = (data) => ({
    type: ADD_BOOK,
    payload: data
});