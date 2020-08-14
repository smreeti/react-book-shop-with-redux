import React from "react";
import AssignBooksForm from "./AssignBooksForm";
import bookCategoryData from "./bookCategoryData";
import AssignBookManage from "../BooksAssign/AssignBookManage";
import store from "../../store";
import {assignBook, filterAssignedBook} from "../../actions";

const shortid = require("shortid");

class AssignBooks extends React.Component {

    state = ({
        bookId: '',
        bookCategoryId: '',
        filteredBookList: [],
        bookList: [],
        isSearch: false
    });

    componentDidMount() {
        const bookList = store.getState().addBookReducer.bookList;
        this.setState({
            bookList: bookList
        })
    }

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

        const bookName = this.state.bookList
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
                    bookList={this.state.bookList}
                    handleChange={this.handleChange}
                    assignBook={this.assignBook}
                />

                <AssignBookManage
                    isSearch={this.state.isSearch}
                    filterAssignedBooks={this.filterAssignedBooks}
                    assignedBookList ={store.getState().assignBookReducer.assignedBookList}
                    filteredBookList={store.getState().assignBookReducer.filteredBookList}
                />
            </React.Fragment>
        )
    }
}

export default AssignBooks