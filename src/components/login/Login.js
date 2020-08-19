import React, {Component} from "react";
import LoginForm from "./LoginForm";
import {login} from "../../actions";
import {connect} from "react-redux";
import users from "../../login";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    handleClick = () => {
        let isUserValid = false;

        users.map(user => {
            if (user.name === this.state.name && user.password === this.state.password) {
                isUserValid = true;
            }
            return isUserValid;
        });

        if (isUserValid) {
            console.log(this.props.history.push('/'));
            localStorage.setItem('login', JSON.stringify({name: this.state.name}));
            this.props.login();
        } else {
            alert("Incorrect user credential")
        }
    };

    render() {
        return (
            <div>
                <LoginForm handleChange={this.handleChange}
                           handleClick={this.handleClick}
                />
            </div>
        )
    }
}

const mapDispatchToProps = {
    login: () => login()
};

export default connect(null, mapDispatchToProps)(Login);