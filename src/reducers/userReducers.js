import {userConstants} from "../actions/constants/userConstants";

const {
    FETCH_USERS_BEGIN,
    FETCH_USERS,
    SAVE_USER,
    HANDLE_USER_ACTION_ERROR
} = userConstants;

const initialState = {
    users: [],
    successMessage: '',
    errorMessage: '',
    isLoading: false
};

export const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_USERS_BEGIN:
            return {
                ...state,
                isLoading: true
            };


        case FETCH_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            };

        case SAVE_USER:

            return {
                ...state,
                users: [...state.users, action.payload.newUserObj],
                successMessage: action.payload.successMessage,
                isLoading: false
            };

        case HANDLE_USER_ACTION_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                isLoading: false
            };

        default:
            return state;
    }
};

export default userReducer;