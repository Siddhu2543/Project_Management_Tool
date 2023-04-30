import "../styles/mainpage.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import axios from "axios";

const MainPage = () => {
  const [projects, setProjects] = useState([]);
  const [todos, setTodos] = useState([]);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios.get("https://localhost:7288/api/Projects", config).then((res) => {
      setProjects(res.data.slice(0, 4));
    });
  }, []);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios
      .get("https://localhost:7288/api/Todoes/Employee", config)
      .then((res) => {
        setTodos(res.data.slice(0, 4));
      });
  }, []);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios
      .get("https://localhost:7288/api/Employees/tasks", config)
      .then((res) => {
        setTasks(res.data);
      });
  }, []);
  return (
    <>
      <div className="row mb-3">
        <div className="col-12 mb-3">
          <h3 className="d-inline text-primary">Tasks</h3>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body">
                  <div className="task-count-wrapper d-flex">
                    <div className="task-count bg-warning me-3">
                      <i className="fa-solid fa-list-check fa-2xl" />
                    </div>
                    <div style={{ fontSize: "larger", fontWeight: "bolder" }}>
                      Total Tasks
                      <br />
                      {tasks?.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body">
                  <div className="task-count-wrapper d-flex">
                    <div className="task-count bg-success me-3">
                      <i className="fa-solid fa-clipboard-check fa-2xl" />
                    </div>
                    <div style={{ fontSize: "larger", fontWeight: "bolder" }}>
                      Completed Tasks
                      <br />
                      {tasks.filter((t) => t.isCompleted).length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body">
                  <div className="task-count-wrapper d-flex">
                    <div className="task-count bg-primary me-3">
                      <i className="fa-solid fa-clock fa-2xl" />
                    </div>
                    <div style={{ fontSize: "larger", fontWeight: "bolder" }}>
                      In Progress Tasks
                      <br />
                      {tasks.filter((t) => !t.isCompleted).length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider bg-secondary"></div>
      <div className="row mb-3">
        <div className="col-12 mb-3">
          <h3 className="d-inline text-primary">Projects</h3>
          <Link
            to="/projects"
            className="float-end"
            role={"button"}
            style={{ textDecoration: "none" }}
          >
            View all...
          </Link>
        </div>
        <div className="col-12">
          <div className="row">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>
      </div>
      <div className="divider bg-secondary"></div>
      <div className="row mb-3">
        <div className="col-12 mb-3">
          <h3 className="d-inline text-primary">Upcoming Todo Items</h3>
          <Link
            to="/todos"
            className="float-end"
            role={"button"}
            style={{ textDecoration: "none" }}
          >
            View all...
          </Link>
        </div>
        <div className="col-12">
          <ol className="list-group list-group-numbered">
            {todos
              .filter(
                (t) => t.dueDate > new Date().toISOString() && !t.isCompleted
              )
              .map((t, i) => (
                <TodoCard key={i} todo={t} />
              ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default MainPage;
