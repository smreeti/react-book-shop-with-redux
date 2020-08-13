import React from "react";

const BookUpdate = (props) => {

    const {bookUpdateObj, handleChange, updateBook, setEditing} = props;

    return (
        <div>
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               name="name"
                               placeholder="Enter name"
                               value={bookUpdateObj.name}
                               onChange={handleChange}
                               required/>
                    </div>
                </div>
                <br/>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Author</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               name="author"
                               placeholder="Enter author"
                               value={bookUpdateObj.author}
                               onChange={handleChange}
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
                               value={bookUpdateObj.publishedDate}
                               placeholder="Enter published date"
                               onChange={handleChange}
                               required/>
                    </div>
                </div>

            </form>

            <br/>
            <div>
                <button className="btn btn-success mt-2"
                        onClick={updateBook}> Update
                </button>

                <button className="btn btn-info mt-2"
                        onClick={setEditing}> Cancel
                </button>

            </div>
        </div>
    )
};

export default BookUpdate