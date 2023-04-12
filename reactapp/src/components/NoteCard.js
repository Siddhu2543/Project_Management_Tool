const NoteCard = () => {
  const handleHoverIn = (e) => {
    e.target.classList.add(["text-danger"]);
  };

  const handleHoverOut = (e) => {
    e.target.classList.remove(["text-danger"]);
  };
  return (
    <div className="col mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Special title treatment
            <i
              className="fa-solid fa-trash float-end"
              id="deletenote"
              onMouseOver={handleHoverIn}
              onMouseOut={handleHoverOut}
              title="Delete Note"
              role={"button"}
              data-bs-toggle={"modal"}
              data-bs-target={"#cnfrmdeletenote"}
            ></i>
          </h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
