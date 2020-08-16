import React from "react";
import {Route, Switch} from "react-router-dom";
import {PageNotFound} from "../PageNotFound";
import BreadCrumb from "./BreadCrumb";

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