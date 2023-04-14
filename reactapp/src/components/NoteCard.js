import axios from "axios";
import Loading from "./Loading";
import { useState } from "react";

const NoteCard = ({ note, setNotes }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleHoverIn = (e) => {
    e.target.classList.add(["text-danger"]);
  };

  const handleHoverOut = (e) => {
    e.target.classList.remove(["text-danger"]);
  };

  const handleDeleteNoteClick = () => {
    setIsLoading(true);
    axios.delete(`https://localhost:7288/api/Notes/${note.id}`).then(() => {
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
        })
        .finally(() => setIsLoading(false));
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="col mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {note.title}
            <i
              className="fa-solid fa-trash float-end"
              id="deletenote"
              onMouseOver={handleHoverIn}
              onMouseOut={handleHoverOut}
              title="Delete Note"
              role={"button"}
              onClick={handleDeleteNoteClick}
            ></i>
          </h5>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
