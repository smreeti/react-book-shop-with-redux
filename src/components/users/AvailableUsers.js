import React from "react";

const AvailableUsers = (props) => {

    const {users, isLoading, errorMessage} = props;
    return (
        <>
            {isLoading && "Loading"}

            {errorMessage && "Error"}

            {users.length > 0 ?

                users.map(user =>
                    <li key={user.id}>  {user.name}</li>
                )
                : 'Error'
            }
        </>
    )
};

export default AvailableUsers;