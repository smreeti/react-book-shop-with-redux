import React from "react";
import {Table} from "react-bootstrap";
import SelectComponent from "../commons/SelectComponent";
import bookCategoryData from "./bookCategoryData";

const AssignBookManage = (props) => {

    const {isSearch, filterAssignedBooks, assignedBookList, filteredBookList} = props;

    return (
        <div>
            {assignedBookList.length > 0 ?

                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>S.N.</th>
                        <th>Category
                            <SelectComponent
                                placeholder="All"
                                name="bookCategoryId"
                                handleChange={filterAssignedBooks}
                                options={bookCategoryData}
                            >
                            </SelectComponent>
                        </th>

                        <th>Book Name</th>
                    </tr>
                    </thead>
                    <tbody>

                    {isSearch ?
                        (
                            filteredBookList.length > 0 ?

                                filteredBookList.map((bookInfo, index) => (
                                    tableRow(bookInfo, index)
                                ))
                                :
                                'No Assigned Book(s) found'
                        )
                        :
                        assignedBookList.map((bookInfo, index) => (
                            tableRow(bookInfo, index)
                        ))
                    }

                    </tbody>
                </Table>
                : 'No Assigned Book(s) Found'
            }
        </div>
    )
};

const tableRow = (bookInfo, index) => {
    return (
        <tr key={bookInfo.id}>
            <td>{index + 1}</td>
            <td>{bookInfo.bookCategoryName}</td>
            <td>{bookInfo.bookName}</td>
        </tr>
    )
};

export default AssignBookManage;