import { useState } from "react";

const ProjectTasks = () => {
  const [tasks, setTasks] = useState([1, 2, 3, 4]);
  const [newtasks, setNewtasks] = useState([]);
  const [showNewTaskAdd, setShowNewTaskAdd] = useState(false);
  const [task, setTask] = useState("");

  const handleAddNewTaskClick = () => {
    if (task !== "") setNewtasks((t) => t.concat(task));
    setShowNewTaskAdd(false);
    setTask("");
  };

  const handleNewTaskTitleChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <>
      <div
        className="tab-pane fade"
        id="projecttasks"
        role="tabpanel"
        tabIndex="0"
      >
        <div className="container p-3 px-5">
          <div className="text-white d-flex justify-content-between align-items-center">
            <p className="h3 ps-3 mb-3">
              <i>Tasks</i>
            </p>
            <button
              type="button"
              className="btn btn-outline-light mb-3"
              data-bs-toggle="modal"
              data-bs-target="#addtask"
            >
              <i className="fa-solid fa-plus-circle fa-lg me-2"></i>
              Add Task
            </button>
          </div>
          <div className="w-100 d-flex align-items-center">
            <label className="form-label text-white me-3" htmlFor="filter">
              Filter:
            </label>
            <select className="form-select mb-3 w-auto">
              <option value="1">All</option>
              <option value="2">Completed</option>
              <option value="3">Active</option>
              <option value="4">Not Started</option>
            </select>
          </div>
          <div className="list-group">
            {tasks.map((t, index) => {
              return (
                <div
                  className="list-group-item list-group-item-action"
                  key={index}
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-3 h3 text-primary">Make SRS</h5>
                    <small className="text-primary">
                      Creation Date:- 03/03/2023
                    </small>
                  </div>
                  <div className="d-flex w-100 justify-content-start">
                    <p className="mb-1 text-muted me-2">Phase:</p>
                    <p className="mb-3 h5">SRS Creation</p>
                  </div>
                  <div className="d-flex w-100 justify-content-start">
                    <p className="mb-1 text-muted me-2">Assigned to:</p>
                    <p className="mb-3 h5">Team Alpha</p>
                  </div>
                  <div className="d-flex w-100 justify-content-start">
                    <p className="mb-1 text-muted me-2">Status:</p>
                    <p className="mb-1 h5">Completed</p>
                  </div>
                  <hr className="mb-3" />
                  <div className="d-block w-100 justify-content-start">
                    <p className="mb-1 text-muted me-2">Tasks:</p>
                    <ol className="list-group list-group-numbered">
                      <li className="list-group-item">A list item</li>
                      <li className="list-group-item">A list item</li>
                      <li className="list-group-item">A list item</li>
                    </ol>
                  </div>
                  <hr className="mb-3" />
                  <div className="d-flex w-100 justify-content-between">
                    <button className="btn btn-primary">Change Status</button>
                    <button
                      className="btn btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#edittask"
                    >
                      Edit Task
                    </button>
                    <button className="btn btn-danger">Remove Task</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="addtask"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add Task
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
                    <li className="list-group-item text-danger">
                      No Task Added
                    </li>
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
                  <i className="fa-solid fa-circle-plus fa-lg me-2"></i> Add
                  Task
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
                    <li className="list-group-item text-danger">
                      No Task Added
                    </li>
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
                  <i className="fa-solid fa-circle-plus fa-lg me-2"></i> Add
                  Task
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
    </>
  );
};

export default ProjectTasks;
