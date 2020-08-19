import API from "../axios/axios-interceptor";
import {fetchUsers, handleUserError, saveUsers} from "./index";

const userActions = {

    fetchUsers: () => async dispatch => {

        try {

            const response = await API.get('/users');

            /*Here response is the data we need, since response interceptor already retrieved it
                 * so we no longer need to use response.data anymore.
            */
            dispatch(fetchUsers(response));
            return response;
        } catch (e) {
            // dispatch(FETCH_USERS_ERROR, "Error");
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

export default userActions


