import { Link } from "react-router-dom";

const ConnectionCard = () => {
  return (
    <li className="list-group-item d-flex">
      <div className="me-3">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar1.png"
          height={"70px"}
          width={"70px"}
          className="con-profile-img"
          alt="John Doe"
        />
      </div>
      <div className="d-block">
        <Link className="h3">John Doe</Link>
        <i className="fa-solid fa-trash fa-xl ms-3 align-baseline text-primary" role={"button"} title="Remove Connection"></i>
        <p className="h5 fw-normal">Role: {"Developer"}</p>
      </div>
      <div className="ms-auto text-center">
        <p className="fs-6 text-primary">
          <i className="fa-solid fa-envelope text-danger"></i> johndoe@gmail.com
        </p>
        <p className="fs-6 text-primary">
          <i className="fa-solid fa-phone text-danger"></i> +91 99889 98888
        </p>
      </div>
    </li>
  );
};

export default ConnectionCard;
