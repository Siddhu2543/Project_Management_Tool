import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchConnectionCard = ({ employee, isconnected, setisSearch }) => {
  const addconnection = () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get(
        `https://localhost:7288/api/Employees/addConnection/${employee.id}`,
        config
      )
      .then(() => {
        setisSearch(false);
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
        {!isconnected && (
          <i
            className="fa-solid fa-user-plus fa-xl ms-3 align-baseline text-primary"
            role={"button"}
            title="Add Connection"
            onClick={addconnection}
          ></i>
        )}
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

export default SearchConnectionCard;
