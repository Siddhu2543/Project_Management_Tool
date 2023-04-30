import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 border-primary mb-3">
      <div className="card" style={{ width: "19rem",height:"22rem" }}>
        <Link
          to={`/projects/${project?.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <img
            src={`https://projectmanagementtool.s3.ap-south-1.amazonaws.com/${project?.image}`}
            className="card-img-top"
            alt="Project Title"
            style={{ height:"10rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{project?.title}</h5>
            <p className="card-text">{project?.description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
