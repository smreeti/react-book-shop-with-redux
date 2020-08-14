import {ASSIGN_BOOK} from "../actions/constants/action-types";

const initialState = {
    assignedBookList: []
};

export const assignBookReducer = (state = initialState, action) => {

    switch (action.type) {
        case ASSIGN_BOOK:
            return {
                ...state,
                assignedBookList: [...state.assignedBookList, action.payload]
            };
        default:
            return state;

    }
};