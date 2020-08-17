import React from 'react';
import './Sidebar.css'
import {Link} from "react-router-dom";

const Sidebar = ({routes}) => {

    return (
        <aside className="sidebar">
            <ul>
                {routes.map((route, index) => {
                    return <p key={index}><Link to={route.path}>{route.menu}</Link></p>
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
