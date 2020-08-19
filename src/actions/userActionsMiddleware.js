import API from "../axios/axios-interceptor";
import {fetchUsers, fetchUsersBegin, handleUserError, saveUsers} from "./index";

const userActionsMiddleware = {

    fetchUsers: () => async dispatch => {

        dispatch(fetchUsersBegin());

        try {

            const response = await API.get('/users');

            /*Here response is the data we need, since response interceptor already retrieved it
                 * so we no longer need to use response.data anymore.
            */
            dispatch(fetchUsers(response));
            return response;
        } catch (e) {
            dispatch(handleUserError("Something went wrong"));
            throw  e;
        }
    },

    saveUser: (newUserObj) => async dispatch => {

        try {
            const response = await API.post('/users/', {newUserObj});

            const saveData = {
                newUserObj: response.newUserObj,
                successMessage: "User added successfully"
            };

            dispatch(saveUsers(saveData));

        } catch (e) {

            dispatch(handleUserError("Something went wrong"));
            throw e;
        }
    }
};

export default userActionsMiddleware


