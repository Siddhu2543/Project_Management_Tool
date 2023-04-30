import axios from "axios";
import { useEffect, useState } from "react";

const TeamCard = ({ team, index }) => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    if (team)
      axios
        .get(`https://localhost:7288/api/Teams/members/${team.id}`)
        .then((res) => {
          console.log(res.data);
          setMembers(res.data);
        });
  }, [team]);

  return (
    <div className="accordion-item" key={index}>
      <h2 className="accordion-header" id={"flush-headingOne" + index}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#flush-collapseOne" + index}
          aria-expanded="false"
          aria-controls={"flush-collapseOne" + index}
        >
          Team: {team.name}
        </button>
      </h2>
      <div
        id={"flush-collapseOne" + index}
        className="accordion-collapse collapse"
        aria-labelledby={"flush-headingOne" + index}
        data-bs-parent="#teamlist"
      >
        <div className="accordion-body">
          <ul className="list-group list-group-flush mb-3">
            {members.map((m, i) => (
              <li
                className="list-group-item d-flex justify-content-start align-items-center"
                key={i}
              >
                <img
                  src={`https://projectmanagementtool.s3.ap-south-1.amazonaws.com/${m?.image}`}
                  className="me-3"
                  height="50px"
                  width="50px"
                />
                <p className="h3 lh-sm">
                  {m?.name}
                  <br />
                  <a
                    className="text-muted h6"
                    style={{ textDecoration: "none" }}
                  >
                    Added
                  </a>
                </p>
                <button className="btn btn-secondary ms-auto" title="Remove">
                  <i className="fa-solid fa-minus fa-sm"></i>
                </button>
              </li>
            ))}
          </ul>
          {/* <button className="btn btn-danger">
            Remove this Team from Project
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
