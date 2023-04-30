import axios from "axios";
import React, { useEffect, useState } from "react";

const AddTaskModal = ({ project, setTasks }) => {
  const [showNewTaskAdd, setShowNewTaskAdd] = useState(false);
  const [task, setTask] = useState("");
  const [title, setTitle] = useState("");
  const [newtasks, setNewtasks] = useState([]);
  const [description, setDescription] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [teamid, setteamid] = useState("");
  const [teams, setteams] = useState([]);
  const [phases, setphases] = useState([]);
  const [phaseid, setphaseid] = useState("");
  const addtask = () => {
    console.log(teamid);
    console.log(phaseid);
    axios
      .post("https://localhost:7288/api/PTasks", {
        name: title,
        startDate: startdate,
        endDate: enddate,
        teamId: teamid,
        description: description,
        phaseId: phaseid,
        tasks: newtasks.join(","),
      })
      .then((res) => {
        console.log(res.date);
        axios
          .get(`https://localhost:7288/api/PTasks/project/${project?.id}`)
          .then((res) => {
            setTasks(res.data);
          });
      });
  };
  const handleAddNewTaskClick = () => {
    if (task !== "") setNewtasks((t) => t.concat(task));
    setShowNewTaskAdd(false);
    setTask("");
  };

  const handleNewTaskTitleChange = (e) => {
    setTask(e.target.value);
  };
  useEffect(() => {
    if (project)
      axios
        .get(`https://localhost:7288/api/Teams/project/${project?.id}`)
        .then((res) => {
          setteams(res.data);
        });
  }, [project]);
  useEffect(() => {
    if (project)
      axios
        .get(`https://localhost:7288/api/Phases/project/${project?.id}`)
        .then((res) => {
          setphases(res.data);
        });
  }, [project]);
  useEffect(() => {
    setteamid(teams[0]?.id);
  }, [teams]);

  useEffect(() => {
    setphaseid(phases[0]?.id);
  }, [phases]);
  return (
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
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tasktitle" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="taskdescription"
                placeholder="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tasktitle" className="form-label">
                Start Date:
              </label>
              <input
                type="Date"
                className="form-control"
                id="taskdescription"
                placeholder="description"
                value={startdate}
                onChange={(e) => {
                  setStartdate(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tasktitle" className="form-label">
                End Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="taskdescription"
                placeholder="description"
                value={enddate}
                onChange={(e) => {
                  setEnddate(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="taskphase" className="form-label">
                Phase
              </label>
              <select
                className="form-select mb-3"
                id="taskphase"
                onChange={(e) => {
                  setphaseid(e.target.value);
                }}
                value={phaseid}
              >
                {phases?.map((p, i) => (
                  <option value={p.id} key={i}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="taskteam" className="form-label">
                Team
              </label>
              <select
                className="form-select mb-3"
                id="taskteam"
                value={teamid}
                onChange={(e) => {
                  setteamid(e.target.value);
                }}
              >
                {teams?.map((p, i) => (
                  <option value={p.id} key={i}>
                    {p.name}
                  </option>
                ))}
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
              onClick={addtask}
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

export default AddTaskModal;
