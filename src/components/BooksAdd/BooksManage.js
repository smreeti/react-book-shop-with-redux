import React from 'react'
import {Table} from 'react-bootstrap'

const BooksManage = (props) => {

    const {bookList} = props;

    return (
        <div>
            {bookList.length > 0 ?

                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>S.N.</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Published Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {bookList.map((bookInfo, index) => (
                        <tr key={bookInfo.id}>
                            <td>{index + 1}</td>
                            <td>{bookInfo.name}</td>
                            <td>{bookInfo.author}</td>
                            <td>{bookInfo.publishedDate}</td>

                            <td>
                                <button onClick={() => props.editBook(bookInfo)}> Edit</button>
                                <button onClick={() => props.openDeleteModal(index)}> Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                : 'No Records Found'}
        </div>
    )
};

export default BooksManage