import React from "react";
import AssignBooks from "../BooksAssign/AssignBooks";
import bookCategoryData from "./bookCategoryData";
import AssignBookManage from "../BooksAssign/AssignBookManage";

class AssignBooksNav extends React.Component {

    constructor() {
        super();
        this.state = ({
            name: '',
            bookCategoryId: '',
            bookCategoryList: bookCategoryData,
            assignedBookList: [],
            filteredBookList: [],
            isSearch: false
        });
    }

    handleChange = (event) => {

        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    assignBook = (event) => {
        console.log("Assign Book Button Clicked");

        let bookCategoryName = "";

        this.state.bookCategoryList.map(bookCategory => {
            if (bookCategory.id === parseInt(this.state.bookCategoryId)) {
                bookCategoryName = bookCategory.name;
                return bookCategoryName;
            }

            return "";
        });

        const newBookObj = {
            id: this.state.assignedBookList.length + 1,
            bookCategoryId: this.state.bookCategoryId,
            name: this.state.name,
            bookCategoryName: bookCategoryName
        };

        this.setState({
            assignedBookList: [...this.state.assignedBookList, newBookObj],
            bookCategoryId: '',
            name: '',
            bookCategoryName: ''
        });

        event.preventDefault();
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
                <AssignBooks
                    name={this.state.name}
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

export default AssignBooksNav