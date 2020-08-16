import {ASSIGN_BOOK, FILTER_ASSIGNED_BOOK} from "../actions/constants/action-types";

const initialState = {
    assignedBookList: [],
    filteredBookList: []
};

export const assignBookReducer = (state = initialState, action) => {

    switch (action.type) {
        case ASSIGN_BOOK:
            return {
                ...state,
                assignedBookList: [...state.assignedBookList, action.payload]
            };

        case FILTER_ASSIGNED_BOOK: {
            return {
                ...state,
                filteredBookList: action.payload
            }
        }

        default:
            return state;

    }
};