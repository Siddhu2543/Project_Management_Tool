import { useState } from "react";

const ProjectPhases = () => {
  const [phases, setPhases] = useState([1, 2, 3, 4]);
  const [showAddPhase, setShowAddPhase] = useState(false);
  const [phaseTitle, setPhaseTitle] = useState("");

  const handlePhaseTitleChange = (e) => {
    setPhaseTitle(e.target.value);
  };

  const handleAddPhaseClick = () => {
    setPhaseTitle("");
    setShowAddPhase(false);
  };
  return (
    <div
      className="tab-pane fade"
      id="projectphases"
      role="tabpanel"
      tabIndex="0"
    >
      <div className="container p-3 px-5">
        <div className="text-white d-flex justify-content-between align-items-center">
          <p className="h3 ps-3 mb-3">
            <i>Phases</i>
          </p>
          <button
            type="button"
            className="btn btn-outline-light mb-3"
            onClick={() => setShowAddPhase(true)}
          >
            <i className="fa-solid fa-plus-circle fa-lg me-2"></i>
            Add Phase
          </button>
        </div>
        {showAddPhase && (
          <div className="w-100 d-flex justify-content-between">
            <input
              className="form-control w-75 mb-3"
              value={phaseTitle}
              onChange={handlePhaseTitleChange}
              placeholder="Phase Title"
            />
            <button
              type="button"
              onClick={handleAddPhaseClick}
              className="btn btn-secondary w-25 mb-3"
            >
              Add Phase
            </button>
          </div>
        )}
        <div className="list-group">
          {phases.map((p, index) => {
            return (
              <div
                className="list-group-item list-group-item-action"
                key={index}
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-3 h3 text-primary">Implementation</h5>
                </div>
                <div className="d-flex w-100 justify-content-start">
                  <p className="mb-1 text-muted me-2">
                    Contribution in the Project(%):
                  </p>
                  <p className="mb-3 h5">25</p>
                </div>
                <div className="d-flex w-100 justify-content-start">
                  <p className="mb-1 text-muted me-2">Progess(%):</p>
                  <p className="mb-1 h5">10</p>
                </div>
                <hr className="mb-3" />
                <div className="d-flex w-100 justify-content-between">
                  <button
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#editphase"
                  >
                    Edit Phase
                  </button>
                  <button
                    className="btn btn-danger"
                    title="Only if No task assigned"
                  >
                    Remove Phase
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="modal fade"
        id="editphase"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editphasebody">
                Edit Phase
              </h1>
            </div>
            <div className="modal-body">
              <label className="form-label" htmlFor="Phase Title">
                Phase Title
              </label>
              <input className="form-control" placeholder="Phase Title" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Update
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

export default ProjectPhases;
