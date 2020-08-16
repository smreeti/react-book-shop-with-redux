import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css'
import App from './App';
import store from "./store";
import {Provider} from "react-redux";

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

