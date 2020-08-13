import {ADD_BOOK} from "../actions/constants/action-types";

const initialState = {
    bookList: []
};

export default function addBookReducer(state = initialState, action) {

    debugger;
    switch (action.type) {

        case ADD_BOOK:
            return {
                ...state,
                bookList: [...state.bookList, action.payload]
            };

        default:
            return state;
    }
}