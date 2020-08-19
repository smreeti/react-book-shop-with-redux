import React from "react";
import AddUser from "../users/AddUser";
import AvailableUserHeader from "../users/AvailableUserHeader";
import AvailableUsers from "../users/AvailableUsers";
import userActionsMiddleware from "../../actions/userActionsMiddleware"
import {connect} from "react-redux";
import shortid from "shortid";

const {
    fetchUsers,
    saveUser,
} = userActionsMiddleware;

class Users extends React.Component {
    state = {
        name: ''
    };

    componentDidMount() {
        this.props.fetchUsers();
    }

    handleChange = (event) => {
        this.setState({name: event.target.value});
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const newUserObj = {
            id: shortid.generate(),
            name: this.state.name
        };

        try {
            await this.props.saveUser(newUserObj);
            alert(this.props.successMessage);
        } catch (e) {
            alert(this.props.errorMessage);
        }

        this.resetLocalState();
    };

    resetLocalState = () => {
        this.setState({
            name: ''
        })
    };

    render() {
        const {users, isLoading, errorMessage} = this.props;

        return (
            <div>
                <AvailableUserHeader/>

                <AvailableUsers users={users}
                                isLoading={isLoading}
                                errorMessage={errorMessage}
                />

                <AddUser
                    name={this.state.name}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {users, successMessage, errorMessage, isLoading} = state.userReducer;

    return {
        users,
        successMessage,
        errorMessage,
        isLoading
    };
};

const mapDispatchToProps = {
    fetchUsers: () => fetchUsers(),
    saveUser: (data) => saveUser(data)
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);