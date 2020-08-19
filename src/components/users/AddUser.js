import React from "react";

const AddUser = (props) => {

    const {name, handleChange, handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <label>
                User Name:
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}/>
            </label>
            
            <button type="submit">Add</button>
        </form>
    )
};

export default AddUser;