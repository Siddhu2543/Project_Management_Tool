import axios from "axios";
import { useEffect, useState } from "react";
import EditPhaseModal from "./EditPhaseModal";

const ProjectPhases = ({ project }) => {
  const [phases, setPhases] = useState([]);
  const [showAddPhase, setShowAddPhase] = useState(false);
  const [phaseTitle, setPhaseTitle] = useState("");

  useEffect(() => {
    axios
      .get(`https://localhost:7288/api/Phases/project/${project?.id}`)
      .then((res) => {
        setPhases(res.data);
      });
  }, [project]);

  const handlePhaseTitleChange = (e) => {
    setPhaseTitle(e.target.value);
  };

  const handleAddPhaseClick = () => {
    setPhaseTitle("");
    axios
      .post("https://localhost:7288/api/Phases", {
        name: phaseTitle,
        description: phaseTitle,
        number: phases.length + 1,
        projectId: project.id,
      })
      .then(() => {
        axios
          .get(`https://localhost:7288/api/Phases/project/${project?.id}`)
          .then((res) => {
            setPhases(res.data);
          });
      });
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
                  <h5 className="mb-3 h3 text-primary">{p?.name}</h5>
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
                {/* <div className="d-flex w-100 justify-content-center">
                  <button
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target={"#editphase" + p.id}
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
                <EditPhaseModal phase={p} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPhases;
