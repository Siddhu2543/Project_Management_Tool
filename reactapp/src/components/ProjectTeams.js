import { useEffect, useState } from "react";
import AddTeamModal from "./AddTeamModal.js";
import axios from "axios";
import TeamCard from "./TeamCard.js";

const ProjectTeams = ({ project }) => {
  const [teams, setTeams] = useState([]);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    if (project)
      axios
        .get(`https://localhost:7288/api/Teams/project/${project?.id}`)
        .then((res) => {
          setTeams(res.data);
        });
  }, [project]);

  return (
    <>
      <div
        className="tab-pane fade"
        id="projectteams"
        role="tabpanel"
        tabIndex="0"
      >
        <div className="container p-3 px-5">
          <div className="text-white d-flex justify-content-between align-items-center">
            <p className="h3 ps-3 mb-3">
              <i>Teams</i>
            </p>
            <button
              type="button"
              className="btn btn-outline-light mb-3"
              data-bs-toggle="modal"
              data-bs-target="#addteam"
            >
              <i className="fa-solid fa-plus-circle fa-lg me-2"></i>
              Add New Team
            </button>
          </div>
          <div className="accordion accordion-flush mb-3" id="teamlist">
            {teams.length > 0
              ? teams.map((t, index) => {
                  {
                    /* return (
                    <div className="accordion-item" key={index}>
                      <h2
                        className="accordion-header"
                        id={"flush-headingOne" + index}
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={"#flush-collapseOne" + index}
                          aria-expanded="false"
                          aria-controls={"flush-collapseOne" + index}
                        >
                          Team: {t.name}
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
                            {members
                              .find((m) => m.id == t.id)
                              ?.members.map((m, i) => {
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
                                  <button
                                    className="btn btn-secondary ms-auto"
                                    title="Remove"
                                  >
                                    <i className="fa-solid fa-minus fa-sm"></i>
                                  </button>
                                </li>;
                              })}
                          </ul>
                          <button className="btn btn-danger">
                            Remove this Team from Project
                          </button>
                        </div>
                      </div>
                    </div>
                  ); */
                  }
                  return <TeamCard team={t} index={index} key={index} />;
                })
              : "No Teams Created"}
          </div>
        </div>
      </div>
      <AddTeamModal setTeams={setTeams} project={project} />
    </>
  );
};

export default ProjectTeams;
