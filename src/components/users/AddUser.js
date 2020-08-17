import React from "react";

const AddUser = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                User Name:
                <input type="text" name="name" onChange={props.handleChange}/>
            </label>
            <button type="submit">Add</button>
        </form>
    )
};

export default AddUser;