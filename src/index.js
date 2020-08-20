import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css'
import store from "./store";
import {Provider} from "react-redux";
import App from "./App";

const render = () => {
    storeLog();

    ReactDOM.render(
        (<Provider store={store}>
            <App/>
        </Provider>), document.getElementById('root'))
};
render();

function storeLog() {
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
    console.log(store.getState());
}

