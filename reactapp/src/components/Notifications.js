import { useState } from "react";
import "../styles/connections.css";
import ConnectionRequestCard from "./ConnectionRequestCard";

const Notifications = () => {
  const [requestes, setRequests] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="container mb-3">
      <h3 className="text-primary">Requestes</h3>
      <hr className="my-4" />
      <ul className="list-group list-group-flush">
        {requestes.map((r) => (
          <ConnectionRequestCard key={r} />
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
