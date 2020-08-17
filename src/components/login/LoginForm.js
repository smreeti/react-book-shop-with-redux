import React from "react";
import './Login.css'

const LoginForm = (props) => {

    const {handleChange, handleClick} = props;

    return (
        <div className="center">
            <br/>
            <div className="col-sm-10">
                <label className="col-sm-2 col-form-label">Name</label>
                <input type="text"
                       className="form-control"
                       name="name"
                       onChange={handleChange}
                       placeholder="Enter name"
                />
            </div>
            <br/>

            <div className="col-sm-10">
                <label className="col-sm-2 col-form-label">Password</label>

                <input type="text"
                       className="form-control"
                       name="password"
                       onChange={handleChange}
                       placeholder="Enter password"
                />
            </div>
            <br/>


            <button onClick={handleClick}> Login</button>
        </div>
    )
};

export default LoginForm;