import React, {Component} from 'react';
import './App.css';
import routes from "./routes";
import {connect} from "react-redux";
import {HashRouter} from "react-router-dom";
import Main from "./components/commons/Main";

class App extends Component{

    render() {
        return (
            <div>
                <HashRouter>
                    <div style={{display: "flex"}}>
                        <Main routes={routes}
                              isLoggedIn={this.props.isLoggedIn}
                        />
                    </div>
                </HashRouter>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn
    }
};

export default connect(mapStateToProps)(App);
