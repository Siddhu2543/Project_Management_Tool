import { useEffect, useState } from "react";
import "../styles/todolist.css";
import NoteCard from "./NoteCard";
import AddNoteModal from "./AddNoteModal";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get("https://localhost:7288/api/Notes/Employee", config)
      .then((res) => {
        setNotes(res.data);
      });
  }, []);

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
                type="button"
                className="btn btn-primary"
                data-bs-toggle={"modal"}
                data-bs-target={"#addnote"}
              >
                <i className="fa-solid fa-circle-plus fa-xl me-2"></i>
                Create Note
              </button>
              <hr className="my-4" />
              <div className="row row-cols-3">
                {notes?.map((n, i) => (
                  <NoteCard key={i} note={n} setNotes={setNotes} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddNoteModal setNotes={setNotes} />
    </div>
  );
};

export default MyNotes;
