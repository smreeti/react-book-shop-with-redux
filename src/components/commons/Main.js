import React from "react";
import BreadCrumb from "./BreadCrumb";
import {Route, Switch} from "react-router-dom";
import {PageNotFound} from "../PageNotFound";

const Main = ({routes}) => {

    return (
        <Switch>
            {routes?.map((route, index) => (

                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={(props) =>
                        <div>
                            <BreadCrumb {...props} data={route}/>
                            <route.main/>
                        </div>
                    }
                >
                </Route>
            ))}

            <Route key="pageNotFound" exact path="" component={PageNotFound}/>
        </Switch>
    )
};

export default Main;