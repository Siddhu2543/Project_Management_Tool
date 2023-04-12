import { Link } from "react-router-dom";
import "../styles/projectdashboard.css";
import Dashboard from "./Dashboard";
import ProjectTeams from "./ProjectTeams";
import ProjectTasks from "./ProjectTasks";
import ProjectPhases from "./ProjectPhases";
import ProjectAttachments from "./ProjectAttachments";
import EmployeeSection from "./EmployeeSection";
import EditProject from "./EditProject";

const ProjectDashboard = () => {
  return (
    <>
      <nav className="navbar" id="projnav">
        <div className="projecttitle px-3">
          <a className="navbar-brand h1" style={{textDecoration: 'underline'}}>Project Management Tool</a>
        </div>
        <div
          className="nav nav-tabs ms-auto me-3"
          id="dashboard-nav-tab"
          role="tablist"
        >
          <button
            className="nav-link active"
            id="nav-dashboard-tab"
            data-bs-toggle="tab"
            data-bs-target="#dashboard"
            type="button"
            role="tab"
            aria-controls="dashboard"
            aria-selected="true"
            title="Dashboard"
          >
            <i className="fa-solid fa-house"></i>
          </button>
          <button
            className="nav-link"
            id="nav-projectteams-tab"
            data-bs-toggle="tab"
            data-bs-target="#projectteams"
            type="button"
            role="tab"
            aria-controls="projectteams"
            aria-selected="false"
            title="Teams"
          >
            <i className="fa-solid fa-people-group"></i>
          </button>
          <button
            className="nav-link"
            id="nav-projecttasks-tab"
            data-bs-toggle="tab"
            data-bs-target="#projecttasks"
            type="button"
            role="tab"
            aria-controls="projecttasks"
            aria-selected="false"
            title="Tasks"
          >
            <i className="fa-solid fa-list-check"></i>
          </button>
          <button
            className="nav-link"
            id="nav-projectphases-tab"
            data-bs-toggle="tab"
            data-bs-target="#projectphases"
            type="button"
            role="tab"
            aria-controls="projectphases"
            aria-selected="false"
            title="Phases"
          >
            <i className="fa-solid fa-bars-progress"></i>
          </button>
          <button
            className="nav-link"
            id="nav-projectattachments-tab"
            data-bs-toggle="tab"
            data-bs-target="#projectattachments"
            type="button"
            role="tab"
            aria-controls="projectattachments"
            aria-selected="false"
            title="Attachments"
          >
            <i className="fa-solid fa-file-zipper"></i>
          </button>
          <button
            className="nav-link"
            id="nav-employeesection-tab"
            data-bs-toggle="tab"
            data-bs-target="#employeesection"
            type="button"
            role="tab"
            aria-controls="employeesection"
            aria-selected="false"
            title="Employee Secion"
          >
            <i className="fa-solid fa-user-clock"></i>
          </button>
          <button
            className="nav-link"
            id="nav-editproject-tab"
            data-bs-toggle="tab"
            data-bs-target="#editproject"
            type="button"
            role="tab"
            aria-controls="editproject"
            aria-selected="false"
            title="Edit Project"
          >
            <i className="fa-solid fa-pen"></i>
          </button>
        </div>
      </nav>
      <div className="tab-content mb-3" id="nav-tabContent">
        <Dashboard />
        <ProjectTeams />
        <ProjectTasks />
        <ProjectPhases />
        <ProjectAttachments />
        <EmployeeSection />
        <EditProject />
      </div>
    </>
  );
};

export default ProjectDashboard;
