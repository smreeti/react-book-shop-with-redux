import React from "react";
import {Table} from "react-bootstrap";
import SelectComponent from "../commons/SelectComponent";

const AssignBookManage = (props) => {

    const {assignedBookList, bookCategoryList, filteredBookList, isSearch, filterAssignedBooks} = props;

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
                                options={bookCategoryList}
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
                                    <tr key={bookInfo.id}>
                                        <td>{index + 1}</td>
                                        <td>{bookInfo.bookCategoryName}</td>
                                        <td>{bookInfo.name}</td>
                                    </tr>
                                ))
                                :
                                'No Assigned Book(s) found'
                        )
                        :
                        assignedBookList.map((bookInfo, index) => (
                            <tr key={bookInfo.id}>
                                <td>{index + 1}</td>
                                <td>{bookInfo.bookCategoryName}</td>
                                <td>{bookInfo.name}</td>
                            </tr>
                        ))
                    }

                    </tbody>
                </Table>
                : 'No Assigned Book(s) Found'
            }
        </div>
    )
};


export default AssignBookManage;