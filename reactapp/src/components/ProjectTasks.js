import { useEffect, useState } from "react";
import AddTaskModal from "./AddTaskModal";
import EditTaskModal from "./EditTaskModal";
import axios from "axios";
import TaskCard from "./TaskCard";

const ProjectTasks = ({ project }) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (project)
      axios
        .get(`https://localhost:7288/api/PTasks/project/${project?.id}`)
        .then((res) => {
          setTasks(res.data);
        });
  }, [project]);
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
            {tasks.map((t, index) => (
              <TaskCard
                project={project}
                t={t}
                key={index}
                setTasks={setTasks}
              />
            ))}
          </div>
        </div>
      </div>
      <AddTaskModal project={project} setTasks={setTasks} />
      <EditTaskModal project={project} />
    </>
  );
};

export default ProjectTasks;
