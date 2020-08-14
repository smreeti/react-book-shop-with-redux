import React from 'react';
import './App.css';
import routes from "./routes";
import {HashRouter} from "react-router-dom";
import Sidebar from "./components/commons/Sidebar";
import Main from "./components/commons/Main";

function App() {
    return (
        <div>
            <HashRouter>
                <div style={{display: "flex"}}>
                    <Sidebar routes={routes}/>
                    <Main routes={routes}/>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
