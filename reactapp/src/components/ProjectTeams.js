import { useEffect, useState } from "react";
import axios from "axios";
const ProjectTeams = () => {
  const [teams, setTeams] = useState([1, 2, 3, 4]);
  const [members, setMembers] = useState([]);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const getemployee = () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios.get("https://localhost:7288/api/Employee", config).then((res) => {
      setMembers(res.data);
    });
  };
  const getteams = () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios.get("https://localhost:7288/api/Teams", config).then((res) => {
      setTeams(res.data);
    });
  };
  const Addteamhandler = () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .post(
        "https://localhost:7288/api/Teams",
        {
          title: title,
          description: description,
          ProjectId: 1,
        },
        config
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  useEffect(()=>{getteams()},[])
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
                  return (
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
                          {t.name}
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
                            <li className="list-group-item d-flex justify-content-start align-items-center">
                              <img
                                src="/logo512.png"
                                className="me-3"
                                height="50px"
                                width="50px"
                              />
                              <p className="h3 lh-sm">
                                Faizan Vora
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
                            </li>
                            <li className="list-group-item d-flex justify-content-start align-items-center">
                              <img
                                src="/logo512.png"
                                className="me-3"
                                height="50px"
                                width="50px"
                              />
                              <p className="h3 lh-sm">
                                Umang Varotariya
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
                            </li>
                          </ul>
                          <button className="btn btn-danger">
                            Remove this Team from Project
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "No Teams Created"}
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="addteam"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add Team
              </h1>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="teamtitle" className="form-label">
                  Team Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="teamtitle"
                  placeholder="Team Alpha"
                  value={title}
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="teamrole" className="form-label">
                  Team Role
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="e.g., Testers, Programmers, QA Engineers, etc."
                  value={description}
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="searchmember" className="form-label">
                  Search Employee
                </label>
                <div className="input-group mb-3">
                  <input
                    id="searchmember"
                    type="search"
                    className="form-control"
                    placeholder="John Doe"
                    aria-label="Employee Full Name"
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    id="emp-search-button"
                  >
                    Search
                  </button>
                </div>
                <section
                  className="bg-secondary text-dark"
                  style={{ borderRadius: "10px" }}
                >
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-start align-items-center">
                      <img
                        src="/logo192.png"
                        className="me-3"
                        height={"50px"}
                        width="50px"
                      />
                      <p className="h3 lh-sm">
                        Siddharth Vadgama
                        <br />
                        <a
                          className="text-muted h6"
                          style={{ textDecoration: "none" }}
                        >
                          Assigned
                        </a>
                      </p>
                    </li>
                    <li className="list-group-item d-flex justify-content-start align-items-center">
                      <img
                        src="/logo512.png"
                        className="me-3"
                        height="50px"
                        width="50px"
                      />
                      <p className="h3 lh-sm">
                        Siddharth Vadgama
                        <br />
                        <a
                          className="text-muted h6"
                          style={{ textDecoration: "none" }}
                        >
                          Not Assigned
                        </a>
                      </p>
                      <button
                        className="btn btn-secondary ms-auto"
                        title="Add to the Team"
                      >
                        <i className="fa-solid fa-plus fa-sm"></i>
                      </button>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="mb-3">
                <label htmlFor="teammembers" className="form-label">
                  Team Members
                </label>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-start align-items-center">
                    <img
                      src="/logo512.png"
                      className="me-3"
                      height="50px"
                      width="50px"
                    />
                    <p className="h3 lh-sm">
                      Faizan Vora
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
                  </li>
                  <li className="list-group-item d-flex justify-content-start align-items-center">
                    <img
                      src="/logo512.png"
                      className="me-3"
                      height="50px"
                      width="50px"
                    />
                    <p className="h3 lh-sm">
                      Umang Varotariya
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
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={Addteamhandler}
              >
                Create
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTeams;
