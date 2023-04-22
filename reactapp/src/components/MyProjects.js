import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import AddProjectModal from "./AddProjectModal";
import axios from "axios";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const getProjects = async () => {
      axios.get("https://localhost:7288/api/Projects", config).then((res) => {
        setProjects(res.data);
      });
    };

    getProjects();
  }, []);
  return (
    <>
      <div className="row mb-3">
        <div className="col-12 mb-3">
          <h3 className="d-inline text-primary">Projects</h3>
          <button
            className="float-end btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#createproject"
          >
            <i className="fa-solid fa-circle-plus fa-lg me-2"></i> Create New
            Project
          </button>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center mb-4 pt-2 pb-3">
            <p className="small mb-0 me-2 text-muted">Filter</p>
            <select className="select">
              <option value="1">All</option>
              <option value="2">Completed</option>
              <option value="3">Active</option>
            </select>
            <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
            <select className="select">
              <option value="1">Due date</option>
              <option value="2">Added date</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>
      </div>
      <AddProjectModal setProjects={setProjects} />
    </>
  );
};

export default MyProjects;
