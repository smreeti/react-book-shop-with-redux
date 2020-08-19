import React from "react";
import {Redirect, Route} from "react-router-dom";
import Sidebar from "./commons/Sidebar";
import routes from "../routes";

export const ProtectedRoute = ({
                                   component: Component,
                                   ...rest
                               }) => {
    return (
        <Route
            {...rest}
            render={props => {
                const {isLoggedIn} = {...rest};

                if (isLoggedIn) {

                    return (
                        <>
                            <Sidebar routes={routes}/>
                            <Component {...props} />
                        </>
                    );
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};
