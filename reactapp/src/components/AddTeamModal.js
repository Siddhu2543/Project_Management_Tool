import axios from "axios";
import { useEffect, useState } from "react";

const AddTeamModal = ({ project, setTeams }) => {
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSearchChange = (e) => {
    const search = e.target.value;
    setSearch(search);
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    if (search)
      axios
        .get(`https://localhost:7288/api/Employees/search/${search}`, config)
        .then((res) => {
          setSearchResult(res.data);
        });
  };

  const addToTeam = (e) => {
    const id = e.target.id;
    if (id)
      axios.get(`https://localhost:7288/api/Employees/${id}`).then((res) => {
        console.log(res.data);
        setEmployees(employees.concat(res.data));
      });
  };

  const removeFromTeam = (e) => {
    const id = e.target.id;
    const index = 0;
    employees.forEach((e, i) => {
      if (e.id == id) {
        index = i;
      }
    });
    setEmployees((emp) => emp.splice(index, 1));
  };

  const addTeam = () => {
    axios
      .post("https://localhost:7288/api/Teams", {
        name: title,
        description: role,
        projectId: project.id,
      })
      .then((res) => {
        const team = res.data;
        employees.forEach((emp) => {
          axios.put(
            `https://localhost:7288/api/Teams/addMember/${team.id}/${emp.id}`
          );
        });
      })
      .finally(() => {
        setTitle("");
        setRole("");
        setSearch("");
        setEmployees([]);
        setSearchResult([]);
        axios
          .get(`https://localhost:7288/api/Teams/project/${project?.id}`)
          .then((res) => {
            setTeams(res.data);
          });
      });
  };

  return (
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
                onChange={handleTitleChange}
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
                value={role}
                onChange={handleRoleChange}
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
                  value={search}
                  onChange={handleSearchChange}
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
                  {searchResult
                    .filter((e) => !e.isAssigned)
                    .map((e, i) => (
                      <li
                        className="list-group-item d-flex justify-content-start align-items-center"
                        key={i}
                      >
                        <img
                          src={`https://projectmanagementtool.s3.ap-south-1.amazonaws.com/${e.image}`}
                          className="me-3"
                          height="50px"
                          width="50px"
                        />
                        <p className="h3 lh-sm">
                          {e.name}
                          <br />
                          <a
                            className="text-muted h6"
                            style={{ textDecoration: "none" }}
                          >
                            Not Assigned
                          </a>
                        </p>
                        <button
                          id={e.id}
                          className="btn btn-secondary ms-auto"
                          title="Add to the Team"
                          onClick={addToTeam}
                        >
                          <i className="fa-solid fa-plus fa-sm"></i>
                        </button>
                      </li>
                    ))}
                </ul>
              </section>
            </div>
            <div className="mb-3">
              <label htmlFor="teammembers" className="form-label">
                Team Members
              </label>
              <ul className="list-group list-group-flush">
                {employees.map((e, i) => (
                  <li
                    className="list-group-item d-flex justify-content-start align-items-center"
                    key={i}
                  >
                    <img
                      src={`https://projectmanagementtool.s3.ap-south-1.amazonaws.com/${e.image}`}
                      className="me-3"
                      height="50px"
                      width="50px"
                    />
                    <p className="h3 lh-sm">
                      {e.name}
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
                      id={e.id}
                      onClick={removeFromTeam}
                    >
                      <i className="fa-solid fa-minus fa-sm"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={addTeam}
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
  );
};
export default AddTeamModal;
