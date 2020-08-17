import {LOGIN} from "../actions/constants/loginConstants";

const initialState = {
    isLoggedIn: false
};

export const loginReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGIN:
            return {
                ...state,
                isLoggedIn: Boolean(localStorage.getItem('login'))
            };

        default:
            return state;
    }
};
