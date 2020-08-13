import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store";

const render = () => {
    storeLog();
    ReactDOM.render(<App/>, document.getElementById('root'))
};
render();

store.subscribe(render);

function storeLog() {
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
    console.log(store.getState());
}

