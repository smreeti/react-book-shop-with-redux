import React from "react";

const InputComponent = props => {

    const {name, type, placeholder, handleChange} = props;

    debugger
    return (
        <div>
            <input
                type={type}
                name ={name}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
};

export default InputComponent;