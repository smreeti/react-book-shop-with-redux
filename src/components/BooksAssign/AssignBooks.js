import React from "react";
import SelectComponent from "../commons/SelectComponent";

const AssignBooks = (props) => {

    const {name, bookCategoryList, handleChange, assignBook} = props;

    return (
        <form onSubmit={assignBook}>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>

                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"
                           name="name"
                           value={name}
                           placeholder="Enter name"
                           onChange={handleChange}
                           required/>
                </div>
            </div>
            <br/>

            <label className="col-sm-2 col-form-label"> Book Category

                <div className="col-sm-10">

                    <SelectComponent
                        placeholder="Select book category"
                        name="bookCategoryId"
                        handleChange={handleChange}
                        options={bookCategoryList}
                    >
                    </SelectComponent>
                </div>
            </label>

            <br/>

            <div className="form-group row">
                <div className="col-sm-10 offset-sm-2">
                    <button type="submit"
                            className="btn btn-primary">Assign
                    </button>
                </div>
            </div>
        </form>
    )
};

export default AssignBooks;