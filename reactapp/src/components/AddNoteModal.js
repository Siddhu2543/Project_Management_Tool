import axios from "axios";
import { useState } from "react";
import Loading from "./Loading";

const AddNoteModal = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddNoteClick = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .post(
        "https://localhost:7288/api/Notes",
        {
          title: title,
          description: description,
        },
        config
      )
      .then((res) => {
        console.log(res.data);
        axios
          .get("https://localhost:7288/api/Notes/Employee", config)
          .then((res) => {
            setNotes(res.data);
          })
          .finally(() => {
            setIsLoading(false);
          });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  if (isLoading) return <Loading />;
  return (
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
            <form onSubmit={handleAddNoteClick}>
              <div className="mb-3">
                <label htmlFor="task" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Weather note"
                  value={title}
                  onChange={handleTitleChange}
                  required
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
                  value={description}
                  onChange={handleDescriptionChange}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-primary me-3"
                  data-bs-dismiss="modal"
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-secondary me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;
