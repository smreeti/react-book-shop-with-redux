import {userConstants} from "../actions/constants/userConstants";

const {
    FETCH_USERS,
    SAVE_USER,
    HANDLE_USER_ACTION_ERROR
} = userConstants;

const initialState = {
    users: [],
    successMessage: '',
    errorMessage: ''
};

export const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_USERS:
            return {
                ...state,
                users:  action.payload,
            };

        case SAVE_USER:

            return {
                ...state,
                users: [...state.users, action.payload.newUserObj],
                successMessage: action.payload.successMessage
            };

        case HANDLE_USER_ACTION_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            };

        default:
            return state;
    }
};

export default userReducer;