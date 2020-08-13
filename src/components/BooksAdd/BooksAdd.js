import React from "react";
import store from "../../store";
import BooksAddForm from "./BooksAddForm";
import {submitBook} from "../../actions";
import AlertMessageInfo from "../AlertMessageInfo";

const shortid = require("shortid");

// import BooksAdd from "../addBooks/BooksAdd";
// import BookUpdate from "../addBooks/BookUpdate";
// import AlertMessageInfo from "../AlertMessageInfo";
// import BooksManage from "../addBooks/BooksManage";
// import BookDeleteModal from "../addBooks/BookDeleteModal";

class BooksAdd extends React.Component {

    state = {
        name: '',
        author: '',
        publishedDate: '',
        alertMessageInfo: {
            showMessage: false,
            type: '',
            message: ''
        },
        showAlertModal: false
    };

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    validateNameDuplicity = (name) => {
        const bookList= store.getState().addBookReducer.bookList;
        return (bookList.filter(book => book.name === name).length > 0);
    };

    handleSubmit = (event) => {

        event.preventDefault();

        this.resetAlertMessage();

        const data = {
            id: shortid.generate(),
            name: this.state.name,
            author: this.state.author,
            publishedDate: this.state.publishedDate
        };

        let isNameExists = this.validateNameDuplicity(data.name);

        if (isNameExists) {
            this.setState({
                alertMessageInfo: {
                    showMessage: true,
                    type: 'error',
                    message: "Book with name '" + data.name + "' already exists"
                }
            });
        } else {
            store.dispatch(submitBook(data));

            this.setState({
                alertMessageInfo: {
                    showMessage: true,
                    type: 'success',
                    message: "Book with name '" + data.name + "' added successfully"
                }
            });
        }

        this.resetStateParams();
    };

    resetAlertMessage = () => {
        this.setState({
            alertMessageInfo: {
                showMessage: false,
                type: '',
                message: ''
            },
        })
    };

    resetStateParams = () => {
        this.setState({
            id: '',
            name: '',
            author: '',
            publishedDate: '',
            showAlertModal: true
        })
    };

    handleCloseModal = () => {
        this.setState({
            showDeleteModal: false,
            showAlertModal: false
        });
    };

    render() {
        const bookAddObj = {
            name: this.state.name,
            author: this.state.author,
            publishedDate: this.state.publishedDate
        };

        return (
            <div>
                <BooksAddForm
                    bookAddObj={bookAddObj}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />

                <AlertMessageInfo
                    alertMessageInfo={this.state.alertMessageInfo}
                    showAlertModal={this.state.showAlertModal}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        )
    }
}

export default BooksAdd;