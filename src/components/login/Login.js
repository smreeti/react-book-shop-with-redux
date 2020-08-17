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
        let isLoggedIn = false;

        users.map(user => {
            if (user.name === this.state.name && user.password === this.state.password) {
                isLoggedIn = true;
            }
            return isLoggedIn;
        });

        if (isLoggedIn) {
            console.log(this.props.history.push('/'));
            localStorage.setItem('login', JSON.stringify({name: this.state.name}));

            this.props.login(true);
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

const mapStateToProps = (state) => ({
    isLoggedIn: state.loginReducer.isLoggedIn

});

const mapDispatchToProps = {
    login: (isLoggedIn) => login(isLoggedIn)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);