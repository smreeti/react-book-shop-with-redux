import React from 'react';
import './Sidebar.css'
import {Link} from "react-router-dom";

const Sidebar = ({routes}) => {

    return (
        <aside className="Sidebar">
            {routes.map((route) => {
                return <li><Link to={route.path}>{route.menu}</Link></li>
            })}
        </aside>
    );
};

export default Sidebar;
