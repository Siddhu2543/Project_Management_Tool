import { useEffect, useState } from "react";
import "../styles/connections.css";
import axios from "axios";
import ConnectionRequestCard from "./ConnectionRequestCard";

const Notifications = () => {
  const [requests, setRequests] = useState([1, 2, 3, 4, 5]);
  const getconnectionrequest = () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get("https://localhost:7288/api/Employees/ConnectionRequests", config)
      .then((res) => {
        setRequests(res.data);
      });
  };

  useEffect(() => {
    getconnectionrequest();
  }, []);

  return (
    <div className="container mb-3">
      <h3 className="text-primary">Requests</h3>
      <hr className="my-4" />
      <ul className="list-group list-group-flush">
        {requests.map((r, i) => (
          <ConnectionRequestCard key={i} employee={r} setRequests={getconnectionrequest} />
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
