import React from "react";

const BooksForm = (props) => {

    const {bookObj, editing, handleChange, handleSubmit, updateBook, setEditing} = props;

    const addButton = (

        <div className="col-sm-10 offset-sm-2">
            <button type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}>Submit
            </button>
        </div>
    );

    const updateButton = (

        <div className="col-sm-10 offset-sm-2">
            <button className="btn btn-success mt-2"
                    onClick={updateBook}> Update
            </button>

            <button className="btn btn-info mt-2"
                    onClick={() => setEditing(false)}> Cancel
            </button>
        </div>
    );

    return (
        <form>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"
                           name="name"
                           value={bookObj.name}
                           onChange={handleChange}
                           placeholder="Enter name"
                    />
                </div>
            </div>
            <br/>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Author</label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"
                           name="author"
                           value={bookObj.author}
                           onChange={handleChange}
                           placeholder="Enter author"
                           required/>
                </div>
            </div>
            <br/>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Published Date</label>
                <div className="col-sm-10">
                    <input type="date"
                           className="form-control"
                           name="publishedDate"
                           value={bookObj.publishedDate}
                           onChange={handleChange}
                           placeholder="Enter published date"
                           required/>
                </div>
            </div>

            <br/>

            <div className="form-group row">
                {editing ? updateButton : addButton}
            </div>
        </form>
    )
};


export default BooksForm