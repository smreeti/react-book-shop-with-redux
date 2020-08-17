import {assignBookConstants} from "../actions/constants/assignBookConstants";

const {
    ASSIGN_BOOK,
    FILTER_ASSIGNED_BOOK
} = assignBookConstants;

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