import React from "react";
import AssignBooksForm from "./AssignBooksForm";
import bookCategoryData from "./bookCategoryData";
import AssignBookManage from "../BooksAssign/AssignBookManage";
import store from "../../store";
import {assignBook} from "../../actions";

const shortid = require("shortid");

class AssignBooks extends React.Component {

    state = ({
        bookId: '',
        bookCategoryId: '',
        bookCategoryList: bookCategoryData,
        assignedBookList: [],
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

        const bookCategoryName = this.state.bookCategoryList
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

    filterAssignedBooks = (event) => {

        const {value} = event.target;

        let filteredList = [];
        this.state.assignedBookList.filter(
            assigned => {
                if (assigned.bookCategoryId === (value)) {
                    filteredList = [...filteredList, assigned];
                }
                return filteredList;
            }
        );

        this.setState({
            filteredBookList: filteredList,
            isSearch: value === '' ? false : true
        });
    };

    render() {

        const assignBookManageObj = {
            assignedBookList: this.state.assignedBookList,
            handleChange: this.handleChange,
            bookCategoryList: this.state.bookCategoryList,
            filteredBookList: this.state.filteredBookList,
            isSearch: this.state.isSearch,
            filterAssignedBooks: this.filterAssignedBooks
        };

        return (
            <React.Fragment>
                <AssignBooksForm
                    bookList={this.state.bookList}
                    bookCategoryList={this.state.bookCategoryList}
                    handleChange={this.handleChange}
                    assignBook={this.assignBook}
                />

                <AssignBookManage {...assignBookManageObj}
                />
            </React.Fragment>
        )
    }
}

export default AssignBooks