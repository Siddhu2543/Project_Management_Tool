import axios from "axios";
import { Link } from "react-router-dom";

const ConnectionRequestCard = ({ employee, setRequests }) => {
  const handleAddShow = (e) => {
    e.target.style.background = "#fbfbfb";
  };
  const acceptRequest = () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get(
        `https://localhost:7288/api/Employees/acceptConnection/${employee.id}/true`,config
      )
      .then(() => {
        setRequests();
      });
  };
  const denyRequest = () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get(
        `https://localhost:7288/api/Employees/acceptConnection/${employee.id}/false`,config
      )
      .then(() => {
        setRequests();
      });
  };
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
        <Link className="h3 text-success">{employee.name}</Link>
        <i
          className="fa-solid fa-square-check fa-xl ms-3 align-baseline text-primary"
          role={"button"}
          title="Accept Request"
          onClick={acceptRequest}
        ></i>
        <i
          className="fa-solid fa-rectangle-xmark fa-xl ms-3 align-baseline text-primary"
          role={"button"}
          title="Deny Request"
          onClick={denyRequest}
        ></i>
      </div>
      <div className="ms-auto text-center">
        <p className="fs-6 text-primary">
          <i className="fa-solid fa-envelope text-danger"></i> {employee.email}
        </p>
        <p className="fs-6 text-primary">
          <i className="fa-solid fa-phone text-danger"></i> {employee.mobile}
        </p>
      </div>
    </li>
  );
};

export default ConnectionRequestCard;
