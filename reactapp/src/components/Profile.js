import { useEffect, useState } from "react";
import UpdateProfileModal from "./UpdateProfileModal";
import axios from "axios";

const Profile = () => {
  const [employee, setEmployee] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [project, setProject] = useState();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("USER"));
    axios
      .get("https://localhost:7288/api/Employees/FindByToken", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        const emp = res.data;
        setEmployee(emp);
        setImageUrl(
          `https://projectmanagementtool.s3.ap-south-1.amazonaws.com/${emp.image}`
        );
      });
  }, []);

  return (
    <>
      <section style={{ backgroundColor: "#eee" }} className="mb-3">
        <div className="container py-3">
          <div className="row">
            <div
              className="col mx-3 mb-3 p-1 ps-3"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                borderWidth: "1px",
                borderColor: "black",
              }}
            >
              <h3 className="text-primary">User Profile</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={imageUrl}
                    alt="avatar"
                    className="rounded-circle"
                    width={"150px"}
                    height={"150px"}
                  />
                  <h5 className="my-3">{employee?.name}</h5>
                  <p className="text-muted mb-4">{employee?.email}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#updateprofile"
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0">
                        {employee?.website === ""
                          ? "Not specified!"
                          : employee?.website}
                      </p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-github fa-lg"
                        style={{ color: "#333333" }}
                      ></i>
                      <p className="mb-0">
                        {employee?.gitHub === ""
                          ? "Not specified!"
                          : employee?.gitHub}
                      </p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-twitter fa-lg"
                        style={{ color: "#55acee" }}
                      ></i>
                      <p className="mb-0">
                        {employee?.twitter === ""
                          ? "Not specified!"
                          : employee?.twitter}
                      </p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      ></i>
                      <p className="mb-0">
                        {employee?.instagram === ""
                          ? "Not specified!"
                          : employee?.instagram}
                      </p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-facebook-f fa-lg"
                        style={{ color: "#3b5998" }}
                      ></i>
                      <p className="mb-0">
                        {employee?.facebook === ""
                          ? "Not specified!"
                          : employee?.facebook}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{employee?.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{employee?.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{employee?.mobile}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Date of Birth</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {employee?.dob.slice(0, 10)}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{employee?.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <span className="text-primary font-italic me-1">
                          Current Assigment
                        </span>{" "}
                        {employee?.teamId
                          ? employee.Team.Project.title
                          : "No Project Assigned currently!"}
                      </p>

                      {employee?.teamId && (
                        <>
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Team Name</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
                                {employee?.team.name}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Team Description</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
                                {employee?.team.description}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Team Progress</p>
                            </div>
                            <div className="col-sm-9">
                              <div
                                className="progress rounded"
                                style={{ height: "5px" }}
                              >
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  aria-valuenow="10"
                                   
                                  
                                  aria-valuemin="0"
                                  aria-valuemax="10"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <span className="text-primary font-italic me-1">
                          Recently Created Project
                        </span>{" "}
                        {"No project created yet!"}
                      </p>

                      {employee?.teamId && (
                        <>
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Phases</p>
                            </div>
                            <div className="col-sm-9">
                              {employee?.projectsCreated
                                .slice(-1)
                                .phases.map((p, i) => (
                                  <p key={i} className="text-muted mb-0">
                                    {p.name}
                                  </p>
                                ))}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Teams</p>
                            </div>
                            <div className="col-sm-9">
                              {employee?.projectsCreated
                                .slice(-1)
                                .teams.map((t, i) => (
                                  <p key={i} className="text-muted mb-0">
                                    {t.name}
                                  </p>
                                ))}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Start Date</p>
                            </div>
                            <div className="col-sm-9">
                              {employee?.projectsCreated.slice(-1).startDate}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">End Date</p>
                            </div>
                            <div className="col-sm-9">
                              {employee?.projectsCreated.slice(-1).endDate}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UpdateProfileModal employee={employee} setEmployee={setEmployee} />
    </>
  );
};

export default Profile;
