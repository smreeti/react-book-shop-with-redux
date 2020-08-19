import React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "../login/Login";

import BreadCrumb from "./BreadCrumb";
import {PageNotFound} from "../PageNotFound";
import {ProtectedRoute} from "../Protected";

const Main = (props) => {

    const {routes, isLoggedIn} = props;

    return (
        <Switch>

            <Route key="login" exact path="/login" component={Login}/>

            {routes?.map((route, index) => (

                <ProtectedRoute
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    isLoggedIn={isLoggedIn}
                    component={(props) =>
                        <div>
                            <BreadCrumb {...props} data={route}/>
                            <route.main/>
                        </div>
                    }
                >
                </ProtectedRoute>
            ))}

            <Route key="pageNotFound" exact path="" component={PageNotFound}/>


        </Switch>
    );
};

export default Main;