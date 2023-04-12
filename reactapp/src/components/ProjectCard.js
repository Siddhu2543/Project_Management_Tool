import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 border-primary mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <Link to="/projects/1" style={{ textDecoration: "none", color: "black" }}>
          <img src="pmt.png" className="card-img-top" alt="Project Title" />
          <div className="card-body">
            <h5 className="card-title">Project Title</h5>
            <p className="card-text">Here goes the project description</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
