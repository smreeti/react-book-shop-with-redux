import React from "react";
import BooksForm from "./BooksForm";
import {deleteBook, submitBook, updateBook} from "../../actions";
import AlertMessageInfo from "../AlertMessageInfo";
import BooksManage from "./BooksManage";
import BookDeleteModal from "./BookDeleteModal";
import {connect} from "react-redux";

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
        const bookList = this.props.bookList;
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
            this.props.submitBook(data);

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

        this.props.updateBook(data);
    };

    deleteBook = () => {
        this.props.deleteBook(this.state.id);

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

    openDeleteModal = (index) => {
        console.log("Delete Modal clicked");
        this.resetAlertMessage();
        this.setState({
                showDeleteModal: true,
                id: index
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
                    bookList={this.props.bookList}
                />

                <BookDeleteModal showDeleteModal={this.state.showDeleteModal}
                                 deleteBook={this.deleteBook}
                                 handleCloseModal={this.handleCloseModal}
                />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookList: state.addBookReducer.bookList
    }
};

const mapDispatchToProps = {
    submitBook: data => submitBook(data),
    updateBook: data => updateBook(data),
    deleteBook: id => deleteBook(id)
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksAdd);