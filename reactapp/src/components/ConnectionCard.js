import { Link } from "react-router-dom";

const ConnectionCard = ({employee}) => {
  return (
    <li className="list-group-item d-flex">
      <div className="me-3">
        <img
          src={`https://projectmanagementtool.s3.ap-south-1.amazonaws.com/${employee.image}`}
          height={"70px"}
          width={"70px"}
          className="con-profile-img"
          alt="John Doe"
        />
      </div>
      <div className="d-block">
        <Link className="h3">{employee.name}</Link>
        <i className="fa-solid fa-trash fa-xl ms-3 align-baseline text-primary" role={"button"} title="Remove Connection"></i>
      </div>
      <div className="ms-auto text-center">
        <p className="fs-6 text-primary">
          <i className="fa-solid fa-envelope text-danger"></i>{employee.email}
        </p>
        <p className="fs-6 text-primary">
          <i className="fa-solid fa-phone text-danger"></i>{employee.mobile}
        </p>
      </div>
    </li>
  );
};

export default ConnectionCard;
