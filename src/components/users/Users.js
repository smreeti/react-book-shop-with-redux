import React from "react";
import AddUser from "../users/AddUser";
import AvailableUserHeader from "../users/AvailableUserHeader";
import AvailableUsers from "../users/AvailableUsers";
import userActions from "../../actions/userActions"
import {connect} from "react-redux";
import shortid from "shortid";

const {
    fetchUsers,
    saveUser,
} = userActions;

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
        return (
            <div>
                <AvailableUserHeader/>

                <AvailableUsers users={this.props.users}/>

                <AddUser
                    name={this.state.name}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.userReducer.users,
    successMessage: state.userReducer.successMessage,
    errorMessage: state.userReducer.errorMessage
});

const mapDispatchToProps = {
    fetchUsers: () => fetchUsers(),
    saveUser: (data) => saveUser(data)
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);