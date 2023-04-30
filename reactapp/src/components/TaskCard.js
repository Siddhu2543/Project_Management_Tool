import axios from "axios";
import { useEffect, useState } from "react";

const TaskCard = ({ t, setTasks, project }) => {
  const [phase, setPhase] = useState();
  const [team, setTeam] = useState();
  const changeStatus = () => {
    axios
      .put(`https://localhost:7288/api/PTasks/toggleStatus/${t?.id}`)
      .then(() => {
        axios
          .get(`https://localhost:7288/api/PTasks/project/${project?.id}`)
          .then((res) => {
            setTasks(res.data);
          });
      });
  };
  useEffect(() => {
    axios.get(`https://localhost:7288/api/Phases/${t?.phaseId}`).then((res) => {
      setPhase(res.data);
    });
    axios.get(`https://localhost:7288/api/Teams/${t?.teamId}`).then((res) => {
      setTeam(res.data);
    });
  }, []);
  return (
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-3 h3 text-primary">{t.name}</h5>
        <small className="text-success fw-bold">
          Start Date:- {t.startDate.slice(0, 10)}
        </small>
        <small className="text-danger fw-bold">
          End Date:- {t.endDate.slice(0, 10)}
        </small>
      </div>
      <div className="d-flex w-100 justify-content-start">
        <p className="mb-1 text-muted me-2">Phase:</p>
        <p className="mb-3 h5">{phase?.name}</p>
      </div>
      <div className="d-flex w-100 justify-content-start">
        <p className="mb-1 text-muted me-2">Assigned to:</p>
        <p className="mb-3 h5">{team?.name}</p>
      </div>
      <div className="d-flex w-100 justify-content-start">
        <p className="mb-1 text-muted me-2">Status:</p>
        <p className="mb-1 h5">{t.isCompleted ? "Completed" : "In Progress"}</p>
      </div>
      <hr className="mb-3" />
      <div className="d-block w-100 justify-content-start">
        <p className="mb-1 text-muted me-2">Tasks:</p>
        <ol className="list-group list-group-numbered">
          {t.tasks.split(",").map((task, i) => (
            <li className="list-group-item" key={i}>
              {task}
            </li>
          ))}
        </ol>
      </div>
      <hr className="mb-3" />
      <div className="d-flex w-100 justify-content-between">
        <button className="btn btn-primary" onClick={changeStatus}>
          Change Status
        </button>
        <button
          className="btn btn-secondary"
          data-bs-toggle="modal"
          data-bs-target="#edittask"
        >
          Edit Task
        </button>
        {/* <button className="btn btn-danger">Remove Task</button> */}
      </div>
    </div>
  );
};

export default TaskCard;
