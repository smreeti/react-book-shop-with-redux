import React from "react";
import {connect} from "react-redux";
import {logout} from "../../actions";
import {Component} from "react/cjs/react.production.min";

class Logout extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.logout();
    };

    render() {
        return (
            <>
                <p> Are you sure? </p>
                <button onClick={this.handleSubmit}>Yes</button>
            </>

        )
    }
}

const mapDispatchToProps = {
    logout: () => logout()
};

export default connect(null, mapDispatchToProps)(Logout);