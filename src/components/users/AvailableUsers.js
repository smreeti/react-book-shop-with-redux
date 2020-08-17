import React from "react";

const AvailableUsers = (props) => {

    return (
        <>
            {props.users.length > 0 ?

                props.users.map(user =>
                    <li key={user.id}>  {user.name}</li>
                )
                : 'Error'
            }
        </>
    )
};

export default AvailableUsers;