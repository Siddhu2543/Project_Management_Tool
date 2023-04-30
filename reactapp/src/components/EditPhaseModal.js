import axios from "axios";
import { useEffect, useState } from "react";

const EditPhaseModal = ({ phase }) => {
  const [phaseTitle, setPhaseTitle] = useState(phase.name);
//   useEffect(() => {
//     setPhaseTitle(phase.name);
//   }, [phase]);

  const handlePhaseTitleChange = (e) => {
    setPhaseTitle(e.target.value);
  };

  return (
    <div
      className="modal fade"
      id={"editphase" + phase.id}
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
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
            <input
              className="form-control"
              placeholder="Phase Title"
              value={phaseTitle}
              onChange={handlePhaseTitleChange}
            />
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
  );
};

export default EditPhaseModal;
