import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {Link} from "react-router-dom";

const BreadCrumb = ({data}) => {

    return (
        <Breadcrumb>
            {data.path === "/" ? '' : <Link to="/">Dashboard</Link>}

            <Link to={data?.path}>
                /{data?.menu}
            </Link>
        </Breadcrumb>
    )
};

export default BreadCrumb;