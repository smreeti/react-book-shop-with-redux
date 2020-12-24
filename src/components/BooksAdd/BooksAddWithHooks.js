import React, {useCallback, useState} from "react";
import BooksForm from "./BooksForm";
import {deleteBook, submitBook, updateBook} from "../../actions";
import AlertMessageInfo from "../AlertMessageInfo";
import BooksManage from "./BooksManage";
import BookDeleteModal from "./BookDeleteModal";
import {useDispatch, useSelector} from "react-redux";

const BooksAddWithHooks = (props) => {

    const shortid = require("shortid");

    const [bookData, setBookData] = useState({
        id: '',
        name: '',
        author: '',
        publishedDate: ''
    });

    const [nameExists, setNameExists] = useState(false);

    const [alertMessageInfo, setAlertMessageInfo] = useState({
        showMessage: false,
        type: '',
        message: ''
    });

    const [showAlertModal, setShowAlertModal] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [editing, setIsEditing] = useState(false);

    const bookList = useSelector(state => state.addBookReducer.bookList);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {name, value} = event.target;

        setBookData(bookData => ({
            ...bookData,
            [name]: value
        }))
    };

    const validateNameDuplicity = useCallback(async (name) => {
        const nameExits = bookList.filter(book => book.name === name).length > 0;
       await setNameExists(nameExits);
    }, [bookList]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const {name} = bookData;

        await validateNameDuplicity(name);

        if (nameExists) {
            showAlertMessage(true, 'error', "Book with name '" + name + "' already exists");
        } else {
            dispatch(submitBook({
                ...bookData,
                id: shortid.generate()
            }));

            showAlertMessage(true, 'success', "Book with name '" + name + "' added successfully");
        }

        resetStateParams();
    };

    const showAlertMessage = (showMessage, type, message) => {
        setAlertMessageInfo((alertMessageInfo) => ({
            ...alertMessageInfo,
            showMessage: showMessage,
            type: type,
            message: message
        }));

        setShowAlertModal(showMessage);
    };

    const resetStateParams = () => {
        setBookData(bookData => ({
            ...bookData,
            id: '',
            name: '',
            author: '',
            publishedDate: '',
        }));

        setEditing(false);
    };

    const handleCloseModal = () => {
        setShowAlertModal(false);
        setShowDeleteModal(false);
    };

    const editBook = (bookInfo) => {
        showAlertMessage(false, '', '');
        setEditing(true);

        setBookData((bookData) => ({
            ...bookData,
            id: bookInfo.id,
            name: bookInfo.name,
            author: bookInfo.author,
            publishedDate: bookInfo.publishedDate
        }));
    };

    const handleEditBook = () => {
        // event.preventDefault();

        dispatch(updateBook({
            ...bookData,
        }));

        showAlertMessage(true, 'success', "Book with name '" + bookData.name + "' updated successfully");
        resetStateParams();
    };

    const handleDeleteBook = () => {
        dispatch(deleteBook(bookData.id));

        showAlertMessage(true, 'success', 'Selected Book deleted successfully.');
        setShowDeleteModal(false);

    };

    const setEditing = (value) => {
        setIsEditing(value);
    };

    const openDeleteModal = (index) => {
        showAlertMessage(false, '', '');
        setShowDeleteModal(true);

        setBookData((bookData) => ({
            ...bookData,
            id: index
        }));
    };

    return (
        <div>

            <BooksForm
                bookObj={bookData}
                editing={editing}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                updateBook={handleEditBook}
                setEditing={setEditing}
            />

            <br/>

            <AlertMessageInfo
                alertMessageInfo={alertMessageInfo}
                showAlertModal={showAlertModal}
                handleCloseModal={handleCloseModal}
            />

            <BooksManage
                openDeleteModal={openDeleteModal}
                editBook={editBook}
                bookList={bookList}
            />

            <BookDeleteModal showDeleteModal={showDeleteModal}
                             deleteBook={handleDeleteBook}
                             handleCloseModal={handleCloseModal}
            />

        </div>
    )

};


// const mapDispatchToProps = {
//     submitBook: data => submitBook(data),
//     updateBook: data => updateBook(data),
//     deleteBook: id => deleteBook(id)
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BooksAdd);

export default BooksAddWithHooks;