import { useState } from "react";

const EditTaskModal = () => {
  const [showNewTaskAdd, setShowNewTaskAdd] = useState(false);
  const [task, setTask] = useState("");
  const [newtasks, setNewtasks] = useState([]);

  const handleAddNewTaskClick = () => {
    if (task !== "") setNewtasks((t) => t.concat(task));
    setShowNewTaskAdd(false);
    setTask("");
  };

  const handleNewTaskTitleChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <div
      className="modal fade"
      id="edittask"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Edit Task
            </h1>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="tasktitle" className="form-label">
                Task Title
              </label>
              <input
                type="text"
                className="form-control"
                id="tasktitle"
                placeholder="Team Alpha"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="taskphase" className="form-label">
                Phase
              </label>
              <select className="form-select mb-3" id="taskphase">
                <option value="1">Customer Req.</option>
                <option value="2">SRS Creation</option>
                <option value="3">Modelling</option>
                <option value="4">Implementation</option>
                <option value="5">Testing</option>
                <option value="6">Deployment</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="taskteam" className="form-label">
                Team
              </label>
              <select className="form-select mb-3" id="taskteam">
                <option value="1">Alpha</option>
                <option value="2">Beta</option>
                <option value="3">Gamma</option>
                <option value="4">Theta</option>
              </select>
            </div>
            <div className="mb-2">
              <ol className="list-group list-group-numbered">
                {newtasks.length > 0 ? (
                  newtasks.map((p, index) => (
                    <li className="list-group-item" key={index}>
                      {p}
                    </li>
                  ))
                ) : (
                  <li className="list-group-item text-danger">No Task Added</li>
                )}
              </ol>
            </div>
            <div className="mb-2">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={() => setShowNewTaskAdd(true)}
              >
                <i className="fa-solid fa-circle-plus fa-lg me-2"></i> Add Task
              </button>
            </div>
            {showNewTaskAdd && (
              <>
                <div className="mb-2">
                  <input
                    type={"text"}
                    id="newtasktitle"
                    className="form-control"
                    value={task}
                    onChange={handleNewTaskTitleChange}
                  />
                </div>
                <div className="mb-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ width: "100%" }}
                    onClick={handleAddNewTaskClick}
                  >
                    Add New Task
                  </button>
                </div>
                <div className="mb-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ width: "100%" }}
                    onClick={() => setShowNewTaskAdd(false)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Create
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
export default EditTaskModal;
