import React from "react";
import Modal from "react-modal";

const BookDeleteModal = (props) => {
    return (
        <div>
            {props.showDeleteModal &&
            <Modal
                isOpen={props.showDeleteModal}
                contentLabel="Minimal Modal Example"
                className="Modal"
                overlayClassName="Overlay"
                ariaHideApp={false}
                onRequestClose={props.handleCloseModal}
            >
                <p> Are you sure you want to delete this Book ?</p>

                <div>
                    <button className="error"
                            onClick={props.deleteBook}> Delete
                    </button>
                    <button onClick={props.handleCloseModal}>Close</button>
                </div>
            </Modal>
            }
        </div>
    )
};

export default BookDeleteModal
