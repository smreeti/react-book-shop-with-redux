import React from "react";
import store from "../../store";
import BooksForm from "./BooksForm";
import {deleteBook, submitBook, updateBook} from "../../actions";
import AlertMessageInfo from "../AlertMessageInfo";
import BooksManage from "./BooksManage";
import BookDeleteModal from "./BookDeleteModal";

const shortid = require("shortid");

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
        showAlertModal: false,
        showDeleteModal: false,
        editing: false
    };


    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    validateNameDuplicity = (name) => {
        const bookList = store.getState().addBookReducer.bookList;
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

    editBook = (bookInfo) => {
        this.resetAlertMessage();

        this.setEditing(true);

        this.setState({
                id: bookInfo.id,
                name: bookInfo.name,
                author: bookInfo.author,
                publishedDate: bookInfo.publishedDate
            }
        );
    };

    updateBook = () => {

        const {id, name, author, publishedDate} = this.state;
        const data = {
            id,
            name,
            author,
            publishedDate
        };

        store.dispatch(updateBook(data));
    };

    deleteBook = () => {
        store.dispatch(deleteBook(this.state.id));

        this.setState({
            showDeleteModal: false,
            alertMessageInfo: {
                showMessage: true,
                type: 'success',
                message: "Selected Book deleted successfully"
            }
        });
    };

    setEditing = (value) => {
        this.setState({
            editing: value
        })
    };

    openDeleteModal = (id) => {
        console.log("Delete Modal clicked");
        this.resetAlertMessage();
        this.setState({
                showDeleteModal: true,
                id: id
            }
        );
    };

    render() {
        const bookObj = {
            name: this.state.name,
            author: this.state.author,
            publishedDate: this.state.publishedDate
        };

        return (
            <div>

                <BooksForm
                    bookObj={bookObj}
                    editing={this.state.editing}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    updateBook={this.updateBook}
                    setEditing={this.setEditing}
                />

                <br/>

                <AlertMessageInfo
                    alertMessageInfo={this.state.alertMessageInfo}
                    showAlertModal={this.state.showAlertModal}
                    handleCloseModal={this.handleCloseModal}
                />

                <BooksManage
                    openDeleteModal={this.openDeleteModal}
                    editBook={this.editBook}
                />

                <BookDeleteModal showDeleteModal={this.state.showDeleteModal}
                                 deleteBook={this.deleteBook}
                                 handleCloseModal={this.handleCloseModal}
                />

            </div>
        )
    }
}

export default BooksAdd;