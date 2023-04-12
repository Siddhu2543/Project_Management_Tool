import "../styles/mainpage.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import TodoCard from "./TodoCard";

const MainPage = () => {
  const [projects, setProjects] = useState([1, 2, 3, 4]);
  const [todos, setTodos] = useState([1, 2, 3, 4]);
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
                      321
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
                      210
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
                      Progress Tasks
                      <br />
                      111
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
            {projects.map((p) => (
              <ProjectCard key={p} />
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
            {todos.map((t) => <TodoCard key={t} />)}
          </ol>
        </div>
      </div>
    </>
  );
};

export default MainPage;