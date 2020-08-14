import {ADD_BOOK, DELETE_BOOK, UPDATE_BOOK} from "../actions/constants/action-types";

const initialState = {
    bookList: [],
    editing: false
};

export default function addBookReducer(state = initialState, action) {

    switch (action.type) {

        case ADD_BOOK:
            return {
                ...state,
                bookList: [...state.bookList, action.payload]
            };

        case UPDATE_BOOK: {
            const updatedBookList = state.bookList.filter(book => {
                if (book.id === action.payload.id) {
                    book.name = action.payload.name;
                    book.author = action.payload.author;
                    book.publishedDate = action.payload.publishedDate;
                }

                return book;
            });

            return {
                bookList: updatedBookList
            }
        }

        case DELETE_BOOK:
            return {
                ...state,
                bookList: state.bookList.filter((book) => book.id !== action.payload)
            };

        default:
            return state;
    }
}