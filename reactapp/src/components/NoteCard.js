import { useState } from "react";

const NoteCard = ({ note, handleId }) => {
  const handleHoverIn = (e) => {
    e.target.classList.add(["text-danger"]);
  };
    const [id, setid] = useState("")
    const getid = (id) => {
        setid(id)
        handleId(id);
        console.log("child component",id)
    }
  const handleHoverOut = (e) => {
    e.target.classList.remove(["text-danger"]);
  };
  return (
    <div className="col mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
                      {note.title }
            <i
                          className="fa-solid fa-trash float-end"
                          id="deletenote"
                          onMouseOver={handleHoverIn}
                          onMouseOut={handleHoverOut}
                          title="Delete Note"
                          role={"button"}
                          data-bs-toggle={"modal"}
                          data-bs-target={"#cnfrmdeletenote"}
                          onClick={() => { getid(note.id) }}
            ></i>
          </h5>
          <p className="card-text">
                      {note.data }
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
