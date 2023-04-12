import { useState } from "react";
import "../styles/todolist.css";
import NoteCard from "./NoteCard";

const MyNotes = () => {
  const [notes, setNotes] = useState([1, 2, 3, 4]);
  return (
    <div className="container pb-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div
            className="card"
            id="list1"
            style={{ borderRadius: ".75rem", backgroundColor: "#fbfbfb" }}
          >
            <div className="card-body py-4 px-4 px-md-5">
              <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                <i className="fas fa-note-sticky me-1"></i>
                <u>My Notes</u>
              </p>
              <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
                <i className="fas fa-info-circle me-2"></i>Notes created can
                only be read or deleted but can not be updated!
              </div>
              <hr className="my-4" />
              <button
                className="btn btn-primary"
                data-bs-toggle={"modal"}
                data-bs-target={"#addnote"}
              >
                <i className="fa-solid fa-circle-plus fa-xl me-2"></i>
                Create Note
              </button>
              <hr className="my-4" />
              <div className="row row-cols-3">
                {notes.map((n) => (
                  <NoteCard key={n} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="cnfrmdeletenote"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Are you sure you want to delete this note?
              </h1>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="addnote"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add New Note
              </h1>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="task" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Weather note"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="duedate" className="form-label">
                  Note Data
                </label>
                <textarea
                  className="form-control"
                  id="notedata"
                  rows="3"
                  placeholder="Today is a wonderful day..."
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Add
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNotes;
