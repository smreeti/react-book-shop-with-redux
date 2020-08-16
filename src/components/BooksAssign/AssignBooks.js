import React from "react";
import AssignBooksForm from "./AssignBooksForm";
import bookCategoryData from "./bookCategoryData";
import AssignBookManage from "../BooksAssign/AssignBookManage";
import store from "../../store";
import {assignBook, filterAssignedBook} from "../../actions";
import {connect} from "react-redux";

const shortid = require("shortid");

class AssignBooks extends React.Component {

    state = ({
        bookId: '',
        bookCategoryId: '',
        filteredBookList: [],
        isSearch: false
    });

    handleChange = (event) => {

        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    assignBook = (event) => {

        event.preventDefault();

        const bookCategoryName = bookCategoryData
            .find(bookCategory => bookCategory.id === parseInt(this.state.bookCategoryId)).name;

        const bookName = this.props.bookList
            .find(book => book.id === this.state.bookId).name;

        const assignBookObj = {
            id: shortid.generate(),
            bookCategoryId: this.state.bookCategoryId,
            bookName: bookName,
            bookCategoryName: bookCategoryName
        };

        store.dispatch(assignBook(assignBookObj));
    };

    filterAssignedBooks = async (event) => {

        const {value} = event.target;

        await this.setState({
            isSearch: Boolean(value)
        });

        store.dispatch(filterAssignedBook(value));
    };

    render() {

        return (
            <React.Fragment>
                <AssignBooksForm
                    bookList={this.props.bookList}
                    handleChange={this.handleChange}
                    assignBook={this.assignBook}
                />

                <AssignBookManage
                    isSearch={this.state.isSearch}
                    filterAssignedBooks={this.filterAssignedBooks}
                    assignedBookList={this.props.assignedBookList}
                    filteredBookList={this.props.filteredBookList}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookList: state.addBookReducer.bookList,
        assignedBookList: state.assignBookReducer.assignedBookList,
        filteredBookList: state.assignBookReducer.filteredBookList
    }
};

export default connect(mapStateToProps)(AssignBooks)